import { PitchDetector } from 'pitchy';
import { AudioSource, MicSource } from '../models/audio.model';
import { Logger } from '../utilities/log-utility';
import { ConfigService } from './config.service';

export type AllowedAlgorithm = 'McLeod' | 'YIN' | 'AMDF' | 'Dynamic Wavelet'

type AlgorithmResult = {
    pitch: number;
    volume: number;
    clarity?: number;
}

interface Algorithm {
    detector: any;
    detect(source: AudioSource): AlgorithmResult;
}

class McLeod implements Algorithm {

    detector: PitchDetector<Float32Array>;

    constructor(source: AudioSource){
        this.detector = PitchDetector.forFloat32Array(source.analyserNode.fftSize);
    }

    detect(source: AudioSource): AlgorithmResult {
        const inputArray = new Float32Array(this.detector.inputLength);
        source.analyserNode.getFloatTimeDomainData(inputArray);
        const result: AlgorithmResult = null;

        [result.pitch, result.clarity] = this.detector.findPitch(inputArray, source.audioContext.sampleRate);
        const squareSum = inputArray.reduce((a, value) => a + (value * value), 0);
        result.volume = Math.sqrt(squareSum / inputArray.length);

        return result;
    }
}

export class PitchDetectorService {
    // the rate at which to update the pitch
    private readonly refreshRate: number;
    private algorithms:{ [key in AllowedAlgorithm]: Algorithm} ;
    private _algorithmResult: AlgorithmResult;
        
    private _pitch: number;
    private _audioSource: AudioSource;
    private _clarity: number;

    private intervalReference: number;
    private onListen: (pitch: number, clarity: number, volume: number) => void;

    // Singleton
    private static _instance: PitchDetectorService;

    // defaults to 17 refreshes a millisecond (~60 refreshes a second) and the microphone source
    private constructor(audioSource: AudioSource = new MicSource(), refreshRate = 17) {
        this.refreshRate = refreshRate;
        this._audioSource = audioSource;
        this.algorithms['McLeod'] = new McLeod(this._audioSource);
    }

    public static Instance(audioSource: AudioSource = new MicSource(), refreshRate = 17) {
        return this._instance || (this._instance = new this(audioSource, refreshRate));
    }

    public startListening(): void {
        this._audioSource.connect().then(() => {
            this.intervalReference = window.setInterval(this.listen.bind(this), this.refreshRate);
        });
    }

    public stopListening(): void {
        window.clearInterval(this.intervalReference);
    }

    public setOnListen(newListen: (pitch: number, clarity: number, volume: number) => void) {
        this.onListen = newListen;
    }

    get pitch(): number {
        return this._algorithmResult.pitch;
    }

    get clarity(): number {
        return this._algorithmResult.clarity;
    }

    get volume(): number {
        return this._algorithmResult.volume;
    }

    get audioSource(): AudioSource {
        return this._audioSource;
    }

    set audioSource(audioSource) {
        // set maximum smoothing
        audioSource.analyserNode.smoothingTimeConstant = 1;
        this._audioSource = audioSource;
    }

    private listen(): void {
        this._algorithmResult = this.algorithms[ConfigService.algorithm].detect(this._audioSource);

        if (this.pitch === 0) {
            Logger.debug('Pitch not detected.', this._algorithmResult.pitch, this._algorithmResult.clarity);
        }

        this.onListen(this._algorithmResult.pitch, this._algorithmResult.clarity, this._algorithmResult.volume);
    }
}

