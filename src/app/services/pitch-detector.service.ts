import { PitchDetector } from 'pitchy';
import { AudioSource, MicSource } from '../models/audio.model';
import { Logger } from '../utilities/log-utility';

export class PitchDetectorService {
    // the rate at which to update the pitch
    private readonly refreshRate: number;
    private pitchDetector: PitchDetector<Float32Array>;

    private _pitch: number;
    private _audioSource: AudioSource;
    private _clarity: number;
    private _volume: number;

    private intervalReference: number;
    private onListen: (pitch: number, clarity: number, volume: number) => void;

    // Singleton
    private static _instance: PitchDetectorService;

    // defaults to 17 refreshes a millisecond (~60 refreshes a second) and the microphone source
    private constructor(audioSource: AudioSource = new MicSource(), refreshRate = 17) {
        this.refreshRate = refreshRate;
        this._audioSource = audioSource;
        this.pitchDetector = PitchDetector.forFloat32Array(this._audioSource.analyserNode.fftSize);
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
        return this._pitch;
    }

    get clarity(): number {
        return this._clarity;
    }

    get volume(): number {
        return this._volume;
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
        const inputArray = new Float32Array(this.pitchDetector.inputLength);
        this._audioSource.analyserNode.getFloatTimeDomainData(inputArray);
        [this._pitch, this._clarity] = this.pitchDetector.findPitch(inputArray, this._audioSource.audioContext.sampleRate);

        if (this.pitch === 0) {
            Logger.debug('Pitch not detected.', this._pitch, this._clarity);
        }

        const squareSum = inputArray.reduce((a, value) => a + (value * value), 0);
        this._volume = Math.sqrt(squareSum / inputArray.length);

        this.onListen(this._pitch, this._clarity, this._volume);
    }
}

