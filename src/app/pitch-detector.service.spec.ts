import {PitchDetectorService} from './pitch-detector.service';

describe('PitchDetectorService', () => {

    let pitchDetectorService: PitchDetectorService;

    beforeEach(function () {
    });

    describe('on init', function () {

        beforeEach(function () {
            pitchDetectorService = new PitchDetectorService()
        });

        it('should set audio stream', fakeAsync(() => {
            // pitchDetectorService.
        }));
    });

    // describe('start', function () {
    //
    // });
    //
    // describe('stop', function () {
    //
    // });
    //
    // describe('setupAudio', function () {
    //
    //     beforeEach(function () {
    //         pitchDetectorService.setupAudio();
    //     });
    //
    //     it('should set the audio context', fakeAsync(() => {
    //
    //     }));
    //     it('should set the analyser', fakeAsync(() => {
    //
    //     }));
    // });

    describe('getPitch', function () {
        it('should return a float value', function () {
            expect(typeof pitchDetectorService.getPitch()).toEqual('float');
        });
        it('should return -1 if no audio source is set up', function () {
            expect(pitchDetectorService.getPitch()).toEqual(-1);
        });

    });

});
