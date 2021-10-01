import { PitchDetector } from "pitchy";

export class PitchDetectorService {

    // the rate at which to update the pitch
    private readonly updateRate: number;

    // window.AudioContext
    private audioContext: AudioContext;
    // window.AnalyserNode
    private readonly analyserNode: AnalyserNode;

    private pitchDetector;
    private pitch;
    private clarity;

    private intervalReference : number;

    constructor(updateRate: number = 100) {
        this.updateRate = updateRate;

        this.audioContext = new window.AudioContext();
        this.analyserNode = this.audioContext.createAnalyser();

        this.pitchDetector = PitchDetector.forFloat32Array(this.analyserNode.fftSize);
    }

    // TODO move this to an audio manager class?
    public async connectToStream() {
        let stream: MediaStream;
        try {
            stream = await navigator.mediaDevices.getUserMedia({audio: true});
        } catch (err) {
            console.log(err);
        }
        // the microphone source
        let sourceNode = this.audioContext.createMediaStreamSource(stream);
        // pipe the microphone source to the pitch detector's analyser node
        sourceNode.connect(this.analyserNode);
        // in most browsers the audio context gets automatically suspended so it needs to be resumed here
        await this.audioContext.resume();
    }

    public start(): void {
        this.intervalReference = window.setInterval(this.pollValues.bind(this), this.updateRate);
    }

    public stop(): void {
        window.clearInterval(this.intervalReference);
    }

    public getPitch(): number {
        return this.pitch;
    }

    public getClarity(): number {
        return this.clarity;
    }

    private pollValues(): void {
        console.log(this.pitch, this.clarity)
        const inputArray = new Float32Array(this.pitchDetector.inputLength);
        this.analyserNode.getFloatTimeDomainData(inputArray);
        [this.pitch, this.clarity] = this.pitchDetector.findPitch(inputArray, this.audioContext.sampleRate);
    }
}
