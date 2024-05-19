import { PitchDetector as PitchfinderPitchDetector } from 'pitchfinder/lib/detectors/types';
import { PitchDetector as PitchyPitchDetector } from 'pitchy';
import { AudioSource } from './audio.model';
import * as Pitchfinder from 'pitchfinder';

export const AllowedAlgorithms = ['McLeod', 'YIN', 'AMDF', 'Dynamic Wavelet'];
export type AllowedAlgorithmTypes = typeof AllowedAlgorithms[number]

export class AlgorithmResult {
    pitch = -1;
    volume = -1;
    clarity = -1;
}

export interface Algorithm {
    detector: PitchyPitchDetector<Float32Array> | PitchfinderPitchDetector;
    detect(source: AudioSource): AlgorithmResult;
}

export class McLeod implements Algorithm {

    detector: PitchyPitchDetector<Float32Array>;

    constructor(source: AudioSource) {
        this.detector = PitchyPitchDetector.forFloat32Array(source.analyserNode.fftSize);
    }

    detect(source: AudioSource): AlgorithmResult {
        const inputArray = new Float32Array(this.detector.inputLength);
        source.analyserNode.getFloatTimeDomainData(inputArray);

        const result = new AlgorithmResult();
        [result.pitch, result.clarity] = this.detector.findPitch(inputArray, source.audioContext.sampleRate);
        const squareSum = inputArray.reduce((a, value) => a + (value * value), 0);
        result.volume = Math.sqrt(squareSum / inputArray.length);

        return result;
    }
}

abstract class PitchfinderAlgorithm implements Algorithm {

    detector: PitchfinderPitchDetector;

    detect(source: AudioSource): AlgorithmResult {
        const inputArray = new Float32Array(2048);
        source.analyserNode.getFloatTimeDomainData(inputArray);

        const result = new AlgorithmResult();
        result.pitch = this.detector(inputArray);
        result.clarity = 1;

        const squareSum = inputArray.reduce((a, value) => a + (value * value), 0);
        result.volume = Math.sqrt(squareSum / inputArray.length);
        return result;
    }
}

export class YIN extends PitchfinderAlgorithm {

    detector: PitchfinderPitchDetector;

    constructor() {
        super();
        this.detector = Pitchfinder.YIN();
    }
}

export class AMDF extends PitchfinderAlgorithm {

    detector: PitchfinderPitchDetector;

    constructor() {
        super();
        this.detector = Pitchfinder.AMDF();
    }
}

export class DynamicWavelet extends PitchfinderAlgorithm {

    detector: PitchfinderPitchDetector;

    constructor() {
        super();
        this.detector = Pitchfinder.DynamicWavelet();
    }
}
