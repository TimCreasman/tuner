import {CN1_NOTE, G9_NOTE, Note, NoteUtility} from '../note-utility';
import {CONFIG} from '../../../config';
import {A440_NOTE_FREQUENCIES} from './A440_note_frequencies';
import {expect} from 'chai';

describe('NotationUtility', function () {
    /** Mock a few frequencies */
    // assume frequency of A to be 440
    CONFIG.frequencyOfA = 440;
    const cn1Freq = 8.176;
    const g9Freq = 12543.854;

    describe('freqToNote', function () {

        it('should return C0 if frequency below C0', function () {
            expect(NoteUtility.freqToNote(A440_NOTE_FREQUENCIES[0] - 1)).to.eq(CN1_NOTE);
        });

        it('should return G9 if above the frequency threshold', function () {
            expect(NoteUtility.freqToNote(A440_NOTE_FREQUENCIES[A440_NOTE_FREQUENCIES.length - 1] + 1)).to.eq(G9_NOTE);
        });

        it('should not error out for normal bounded frequencies', function () {
            for (let i = cn1Freq; i < g9Freq; i += 1) {
                expect(() => {
                    NoteUtility.freqToNote(i);
                }).not.throw();
            }
        });
    });

    describe('noteToPitch', function () {

        it('should find correct pitches within 2 significant figures', function () {

            function round(num: number) {
                return Math.round((num + Number.EPSILON) * 1000) / 1000;
            }

            A440_NOTE_FREQUENCIES.forEach(function (actualFreq, i) {
                const calculatedFreq = NoteUtility.noteToPitch(new Note(i));
                const roundedFreq = round(calculatedFreq);
                expect(roundedFreq).to.eq(actualFreq);
            });
        });
    });
});
