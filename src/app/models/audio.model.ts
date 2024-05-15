import { Logger } from '../utilities/log-utility';

export interface AudioSource {
    // window.AudioContext
    get audioContext(): AudioContext;

    // window.AnalyserNode
    get analyserNode(): AnalyserNode;

    get sourceNode(): MediaStreamAudioSourceNode | OscillatorNode;

    connect(): Promise<AudioSource>;
}

export class MicSource implements AudioSource {

    // window.AudioContext
    readonly audioContext: AudioContext;
    // window.AnalyserNode
    readonly analyserNode: AnalyserNode;

    sourceNode: MediaStreamAudioSourceNode;

    public constructor() {
        this.audioContext = new AudioContext();
        this.analyserNode = new AnalyserNode(this.audioContext);
    }

    public async connect() {
        let stream: MediaStream;
        try {
            stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        } catch (err) {
            Logger.error(err);
        }

        // the microphone source
        this.sourceNode = this.audioContext.createMediaStreamSource(stream);
        // pipe the media source to the analyser
        this.sourceNode.connect(this.analyserNode);
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

    sourceNode: OscillatorNode;

    public constructor() {
        this.audioContext = new AudioContext();
        this.analyserNode = new AnalyserNode(this.audioContext);
    }

    public async connect() {

        this.sourceNode = this.audioContext.createOscillator();

        // value in hertz
        this.sourceNode.type = 'sine';
        this.sourceNode.frequency.setValueAtTime(440, this.audioContext.currentTime);
        this.sourceNode.start();
        this.sourceNode.connect(this.analyserNode);

        // in most browsers the audio context gets automatically suspended, so it needs to be resumed here
        await this.audioContext.resume();
        return this;
    }

    set frequency(_frequency: number) {
        this.sourceNode.frequency.setValueAtTime(_frequency, this.audioContext.currentTime);
    }
}

