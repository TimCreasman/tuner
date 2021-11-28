
// one note must be defined
export const A4: number = 440;

// calculate the lowest notated pitch (C0) based on A4
// With A4 = 440 C0 is around 16.35Hz
export const C0: number = A4 * (2 ** -4.75);

// upperbound pitch frequency
//TODO make this based on A4
export const B9: number = 14080;

// naming conventions
export const NAMES_WITH_SHARPS: string[] = ['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
export const NAMES_WITH_FLATS: string[] = ['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B'];

// the number of divisions between notes
export const NOTES_IN_OCTAVE = 12;

export class NotationUtility {

    // returns the note notation representation of a frequency
    public static hzToNoteName(frequency: number): string {
        if (frequency < C0) {
            return NAMES_WITH_SHARPS[0] + '0';
        }
        if (frequency > B9) {
            return NAMES_WITH_SHARPS[11] + '9';
        }

        // half steps from the lowest defined note (C0)
        const halfSteps = Math.round(NOTES_IN_OCTAVE * Math.log2(frequency / C0));
        let octave = Math.floor(halfSteps / NOTES_IN_OCTAVE);
        const letterIndex = halfSteps % NOTES_IN_OCTAVE;

        if (isNaN(halfSteps) || isNaN(octave) || isNaN(letterIndex)) {
            throw new Error('calculated frequency produced NaN')
        }

        //TODO make this dynamic so you can choose to display as sharps or flats
        return NAMES_WITH_SHARPS[letterIndex] + octave;
    }

}
