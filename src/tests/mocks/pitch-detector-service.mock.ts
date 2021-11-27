import {PitchDetectorService} from '../../app/services/pitch-detector.service';

export class PitchDetectorServiceMock {
    getPitch() {
        return Math.random() * 20000;
    }
}
