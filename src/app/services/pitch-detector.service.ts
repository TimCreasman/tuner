import { AlgorithmResult, AllowedAlgorithm, Algorithm, McLeod, YIN } from '../models/algorithm.model';
import { AudioSource, MicSource } from '../models/audio.model';
import { Logger } from '../utilities/log-utility';

export class PitchDetectorService {
    // the rate at which to update the pitch
    private readonly refreshRate: number;
    private algorithms:{ [key in AllowedAlgorithm]: Algorithm} | Record<string, never> = {};
    private _algorithmResult: AlgorithmResult;
        
    private _audioSource: AudioSource;

    private intervalReference: number;
    private onListen: (pitch: number, clarity: number, volume: number) => void;

    // Singleton
    private static _instance: PitchDetectorService;

    // defaults to 17 refreshes a millisecond (~60 refreshes a second) and the microphone source
    private constructor(audioSource: AudioSource = new MicSource(), refreshRate = 17) {
        this.refreshRate = refreshRate;
        this._audioSource = audioSource;
        this.algorithms['McLeod'] = new McLeod(this._audioSource);
        this.algorithms['YIN'] = new YIN();
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
        this._algorithmResult = this.algorithms['McLeod'].detect(this._audioSource);
        console.log(this._algorithmResult.pitch);
        

        if (this.pitch === -1) {
            Logger.debug('Pitch not detected.', this._algorithmResult.pitch, this._algorithmResult.clarity);
        }

        this.onListen(this._algorithmResult.pitch, this._algorithmResult.clarity, this._algorithmResult.volume);
    }
}

