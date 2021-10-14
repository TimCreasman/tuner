import { PitchDetector } from "pitchy";

export class PitchDetectorService {

    private readonly audioSource: AudioSource;
    // the rate at which to update the pitch
    private readonly refreshRate: number;
    private pitchDetector;
    private pitch;
    private clarity;
    private intervalReference : number;

    constructor(refreshRate: number = 300) {
        this.refreshRate = refreshRate;
        this.audioSource = new AudioSource();
        this.pitchDetector = PitchDetector.forFloat32Array(this.audioSource.getAnalyserNode().fftSize);
    }

    public startListening(): void {
        this.audioSource.connect().then(() => {
            this.intervalReference = window.setInterval(this.pollValues.bind(this), this.refreshRate);
        });
    }

    public stopListening(): void {
        window.clearInterval(this.intervalReference);
    }

    public getPitch(): number {
        return this.pitch;
    }

    public getClarity(): number {
        return this.clarity;
    }

    private pollValues(): void {
        const inputArray = new Float32Array(this.pitchDetector.inputLength);
        this.audioSource.getAnalyserNode().getFloatTimeDomainData(inputArray);
        [this.pitch, this.clarity] = this.pitchDetector.findPitch(inputArray, this.audioSource.getAudioContext().sampleRate);
    }
}

class AudioSource {

    // window.AudioContext
    private readonly audioContext: AudioContext;
    // window.AnalyserNode
    private readonly analyserNode: AnalyserNode;

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
        let streamSourceNode = this.audioContext.createMediaStreamSource(stream);
        // pipe the media source to the analyser
        streamSourceNode.connect(this.analyserNode);
        // in most browsers the audio context gets automatically suspended so it needs to be resumed here
        await this.audioContext.resume();
    }

    public getAnalyserNode(): AnalyserNode {
        return this.analyserNode;
    }

    public getAudioContext(): AudioContext {
        return this.audioContext;
    }
}
