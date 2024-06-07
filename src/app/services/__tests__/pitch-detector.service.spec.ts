import { OscillatorSource } from '../../models/audio.model';
import { PitchDetectorService } from '../pitch-detector.service';
import { A440_NOTE_FREQUENCIES } from '../../utilities/__tests__/A440_note_frequencies';
import { ConfigService } from '../config.service';
import { AllowedAlgorithmTypes } from '../../models/algorithm.model';
import { expect } from 'chai';

type TestInput = { algorithm: AllowedAlgorithmTypes, inputFrequency: number, nextFrequency: number };

// Disable this test by default as it is flaky by nature.
// It has value as an analyzer of all of the pitch detection algorithms across the frequency range.
describe.skip('pitch detector service', async () => {

    let pitchDetectorService: PitchDetectorService;

    before(async () => {
        // use an oscillator to test pitches
        pitchDetectorService = PitchDetectorService.Instance(new OscillatorSource());
        // mock the on listen callback
        pitchDetectorService.setOnListen(() => { return; });

        // start detecting pitches
        pitchDetectorService.startListening();

        // audio playback if debugging in a headfull browser
        pitchDetectorService.audioSource.sourceNode.connect(pitchDetectorService.audioSource.audioContext.destination);
    });

    const frequencyTest = async function(args: TestInput) {

        ConfigService.algorithm = args.algorithm;

        const osc = (pitchDetectorService.audioSource as OscillatorSource);
        osc.frequency = args.inputFrequency;

        await new Promise((t) => setTimeout(t, 100));

        if (args.algorithm === 'McLeod') {
            expect(pitchDetectorService.clarity).to.be.closeTo(1, 0.05);
        }

        const frequencyRatio = args.inputFrequency / pitchDetectorService.pitch;

        // should be accurate within 10 cents of the frequency
        expect(1200 * Math.log(frequencyRatio)).to.be.closeTo(0, 10);
    };

    const allTests: TestInput[] = [];


        for (let index = 26; index < A440_NOTE_FREQUENCIES.length - 13; index++) {
            allTests.push({
                algorithm: 'McLeod',
                inputFrequency: A440_NOTE_FREQUENCIES[index],
                nextFrequency: A440_NOTE_FREQUENCIES[index + 1]
            });
        }

    allTests.forEach((testInput: TestInput) => {
        it(`detects correct pitch for ${testInput.inputFrequency} using ${testInput.algorithm}`, async () => {
            await frequencyTest(testInput);
        });
    });

    after(async () => {
        pitchDetectorService.stopListening();
        pitchDetectorService.audioSource.sourceNode.disconnect();
    });
});

