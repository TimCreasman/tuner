import {html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {ACCIDENTALS, CN1_NOTE, G9_NOTE, Note, NoteUtility} from '../../utilities/note-utility';
import {OscillatorSource, PitchDetectorService} from '../../services/pitch-detector.service';
import {MathUtility} from '../../utilities/math-utility';
import {CONFIG} from '../../../config';

@customElement('tn-tuner')
export class TunerComponent extends LitElement {

    /**
     * Reference to the pitch detector service
     * @private
     */
    private pitchDetectorService = new PitchDetectorService();

    /**
     * The note to display
     */
    @property()
    note: Note = new Note(0);

    /**
     * The accuracy of the detected note
     */
    @property()
    accuracy = 50;

    /**
     * The accidental of the incoming pitch
     */
    @property()
    pitchAccidental: ACCIDENTALS;

    /**
     * Set to true if an oscillator is being used as the audio source
     */
    @state()
    isOscillator = false;

    connectedCallback() {

        if (CONFIG.debugMode) {
            this.pitchDetectorService.audioSource = new OscillatorSource();
            this.isOscillator = true;
        }

        super.connectedCallback();
        this.pitchDetectorService.setOnListen((freq, clarity) => {
            // only update the note if we are confident about it
            if (clarity > 0.9) {
                this.note = NoteUtility.freqToNote(freq);
            }

            const expectedPitch = NoteUtility.noteToPitch(this.note);
            const nextLowestPitch = NoteUtility.noteToPitch(new Note(this.note.index - 1));
            const nextHighestPitch = NoteUtility.noteToPitch(new Note(this.note.index + 1));

            // calculates the accuracy of the current frequency to the next closest note
            if (freq < expectedPitch) {
                // the frequency is flat
                this.pitchAccidental = ACCIDENTALS.flat;
                this.accuracy = MathUtility.map(freq, nextLowestPitch, expectedPitch, -1, 1);
            } else {
                // the frequency is sharp
                this.pitchAccidental = ACCIDENTALS.sharp;
                this.accuracy = MathUtility.map(freq, nextHighestPitch, expectedPitch, -1, 1);
            }
            if (this.accuracy < 0) {
                this.accuracy = 0;
            }
        });
        this.pitchDetectorService.startListening();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.pitchDetectorService.stopListening();
    }

    /**
     * Updates the oscillator node frequency
     * @param inputEvent incoming input event
     * @private
     */
    private updateOscillatorFrequency(inputEvent: InputEvent) {
        // update the property so that it keeps up with the input's current value
        const osc = this.pitchDetectorService.audioSource as OscillatorSource;
        osc.frequency = Number((<HTMLInputElement>inputEvent.target).value);
    }

    render() {
        return html`
            ${CONFIG.debugMode ?
                    html`<input type="range" .min=${NoteUtility.noteToPitch(CN1_NOTE)}
                                .max=${NoteUtility.noteToPitch(G9_NOTE)}
                                @input="${this.updateOscillatorFrequency}">
                    ${this.accuracy}` : ''
            }

            <tn-tuner-ring .accuracy="${this.accuracy}" .pitchAccidental="${this.pitchAccidental}"></tn-tuner-ring>
            <tn-tuner-note .note="${this.note}" .accuracy="${this.accuracy}"></tn-tuner-note>
        `;
    }
}
