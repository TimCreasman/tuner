import {PitchDetector} from 'pitchy';

export class PitchDetectorService {
    // the rate at which to update the pitch
    private readonly refreshRate: number;
    private pitchDetector: PitchDetector<Float32Array>;

    private _pitch: number;
    private _audioSource: AudioSource;
    private _clarity: number;

    private intervalReference: number;
    private onListen: (pitch: number, clarity: number) => void;

    // defaults to 17 refreshes a millisecond (~60 refreshes a second) and the microphone source
    constructor(audioSource: AudioSource = new MicSource(), refreshRate = 17) {
        this.refreshRate = refreshRate;
        this._audioSource = audioSource;
        this.pitchDetector = PitchDetector.forFloat32Array(this._audioSource.analyserNode.fftSize);
    }

    public startListening(): void {
        this._audioSource.connect().then(() => {
            this.intervalReference = window.setInterval(this.listen.bind(this), this.refreshRate);
        });
    }

    public stopListening(): void {
        window.clearInterval(this.intervalReference);
    }

    public setOnListen(newListen: (pitch: number, clarity: number) => void) {
        this.onListen = newListen;
    }

    get pitch(): number {
        return this._pitch;
    }

    get clarity(): number {
        return this._clarity;
    }

    get audioSource(): AudioSource {
        return this._audioSource;
    }

    set audioSource(audioSource) {
        this._audioSource = audioSource;
    }

    private listen(): void {
        const inputArray = new Float32Array(this.pitchDetector.inputLength);
        this._audioSource.analyserNode.getFloatTimeDomainData(inputArray);
        [this._pitch, this._clarity] = this.pitchDetector.findPitch(inputArray, this._audioSource.audioContext.sampleRate);
        // TODO - better error handling?
        // if (this.pitch === 0) {
        //     this.stopListening();
        //     throw new Error('Error connecting to microphone. Is the microphone active?');
        // }
        this.onListen(this._pitch, this._clarity);
    }
}

interface AudioSource {
    // window.AudioContext
    get audioContext(): AudioContext;

    // window.AnalyserNode
    get analyserNode(): AnalyserNode;

    connect(): Promise<AudioSource>;
}

export class MicSource implements AudioSource {

    // window.AudioContext
    readonly audioContext: AudioContext;
    // window.AnalyserNode
    readonly analyserNode: AnalyserNode;

    public constructor() {
        this.audioContext = new AudioContext();
        this.analyserNode = new AnalyserNode(this.audioContext);
    }

    public async connect() {
        let stream: MediaStream;
        try {
            stream = await navigator.mediaDevices.getUserMedia({audio: true});
        } catch (err) {
            console.log(err);
        }

        // the microphone source
        const streamSourceNode = this.audioContext.createMediaStreamSource(stream);
        // pipe the media source to the analyser
        streamSourceNode.connect(this.analyserNode);
        // in most browsers the audio context gets automatically suspended, so it needs to be resumed here
        await this.audioContext.resume();
        return this;
    }
}

export class OscillatorSource implements AudioSource {
    // window.AudioContext
    readonly audioContext: AudioContext;
    // window.AnalyserNode
    readonly analyserNode: AnalyserNode;

    private oscillator: OscillatorNode;

    public constructor() {
        this.audioContext = new AudioContext();
        this.analyserNode = new AnalyserNode(this.audioContext);
    }

    public async connect() {

        this.oscillator = this.audioContext.createOscillator();

        // value in hertz
        this.oscillator.type = 'sine';
        this.oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime);
        this.oscillator.start();
        this.oscillator.connect(this.analyserNode);
        // const gain = this.audioContext.createGain();
        // gain.gain.value = 0.01;
        // this.oscillator.connect(gain);
        // gain.connect(this.audioContext.destination);
        // this.oscillator.connect(this.audioContext.destination);

        // in most browsers the audio context gets automatically suspended, so it needs to be resumed here
        await this.audioContext.resume();
        return this;
    }

    set frequency(_frequency: number) {
        this.oscillator.frequency.setValueAtTime(_frequency, this.audioContext.currentTime);
    }
}
