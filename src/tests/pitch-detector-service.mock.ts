import {PitchDetectorService} from '../app/pitch-detector.service';

export class PitchDetectorServiceMock {
    getPitch() {
        return Math.random() * 20000;
    }
}
