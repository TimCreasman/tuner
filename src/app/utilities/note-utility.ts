import {CONFIG} from '../../config';
import {MathUtility} from './math-utility';

export const NOTES_IN_OCTAVE = 12;

// naming constants
export const NAMES_WITH_SHARPS: string[] = ['C', 'C', 'D', 'D', 'E', 'F', 'F', 'G', 'G', 'A', 'A', 'B'];
export const ACCIDENTAL_INDEXES: number[] = [1, 3, 6, 8, 10];
export const NAMES_WITH_FLATS: string[] = ['C', 'D', 'D', 'E', 'E', 'F', 'G', 'G', 'A', 'A', 'B', 'B'];

export enum ACCIDENTALS {
    sharp,
    flat
}

/**
 * This class defines the properties of a note
 */
export class Note {

    // a midi index can be any number 0 to 127
    public index: number;
    // the octave of the note, is a number -1 to 9
    public readonly octave: number;

    // the letter notation of the note
    get letter(): string {
        return this.lookupLetter();
    }

    // the accidental related to the note
    get accidental(): string {
        return this.lookupAccidental();
    }

    /**
     * Constructs a new Note object
     * @param index the midi index for the note (0 to 127)
     */
    public constructor(index: number) {
        this.index = MathUtility.clamp(index, [0, 127]);
        // subtract the octave by 1 to shift it down. The range is -1 to 9
        this.octave = Math.floor(index / NOTES_IN_OCTAVE) - 1;
    }

    /**
     * @private
     * @returns {string} the note letter notation based on the accidental mode value set in the {@link CONFIG}
     */
    private lookupLetter(): string {
        return (CONFIG.accidentalMode ? NAMES_WITH_SHARPS[this.index % NOTES_IN_OCTAVE] : NAMES_WITH_FLATS[this.index % NOTES_IN_OCTAVE]);
    }

    /**
     * @private
     * @returns {string} the note accidental based on the accidental mode value set in the {@link CONFIG} or an empty string if the note is not an accidental.
     */
    private lookupAccidental(): string {
        // if the note is an accidental
        if (ACCIDENTAL_INDEXES.includes(this.index % NOTES_IN_OCTAVE)) {
            return (CONFIG.accidentalMode ? '#' : 'b');
        } else {
            return '';
        }
    }

}

/**
 * Common note constants. A few specific notes are defined
 */

export const CN1_NOTE: Note = new Note(0);
export const A4_NOTE: Note = new Note(69);
export const G9_NOTE: Note = new Note(127);

/**
 * Utility class to handle translating a note to a frequency and vice-versa
 */
export class NoteUtility {

    /**
     * returns the note notation representation of a frequency
     * @param frequency the raw frequency in HZ
     * @returns {Note} the calculated note
     */
    public static freqToNote(frequency: number): Note {
        if (frequency < this.noteToPitch(CN1_NOTE)) {
            return CN1_NOTE;
        }
        if (frequency > this.noteToPitch(G9_NOTE)) {
            return G9_NOTE;
        }

        // half steps from the lowest defined note (C-1)
        const halfSteps = Math.round(NOTES_IN_OCTAVE * Math.log2(frequency / this.noteToPitch(CN1_NOTE)));

        if (isNaN(halfSteps)) {
            throw new Error('calculated frequency produced NaN');
        }

        return new Note(halfSteps);
    }

    /**
     * This function uses the tuning of A4 to determine the notes relative pitch.
     * @param note the note to calculate the frequency for
     * @returns {number} the frequency of the note
     */
    public static noteToPitch(note: Note): number {
        const halfStepsFromA = note.index - A4_NOTE.index;
        // the frequency between each note in an octave
        const frequencyBetweenNotes = 2 ** (1 / NOTES_IN_OCTAVE);
        return CONFIG.frequencyOfA * (frequencyBetweenNotes ** halfStepsFromA);
    }

}
