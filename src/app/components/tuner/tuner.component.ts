import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ACCIDENTALS, Note, NoteUtility} from '../../utilities/note-utility';
import {OscillatorSource, PitchDetectorService} from '../../services/pitch-detector.service';
import {MathUtility} from '../../utilities/math-utility';
import {CONFIG} from '../../../config';
import {Logger} from '../../utilities/log-utility';
import {SimpleBuffer} from '../../utilities/simple-buffer';

@customElement('tn-tuner')
export class TunerComponent extends LitElement {

    /**
     * Reference to the pitch detector service
     * @private
     */
    private pitchDetectorService = new PitchDetectorService();

    private accuracyBuffer = new SimpleBuffer(10);

    /**
     * The note to display
     */
    @property()
    note: Note = new Note(0);

    /**
     * The accuracy of the detected note
     */
    @property()
    accuracy = 0;

    @property()
    clarity = 1;

    /**
     * The accidental of the incoming pitch
     */
    @property()
    pitchAccidental: ACCIDENTALS;

    connectedCallback() {
        super.connectedCallback();

        this.pitchDetectorService.setOnListen((freq, clarity) => {
            this.clarity = clarity;
            // only update the note if we are confident about it
            if (clarity > 0.98) {
                this.note = NoteUtility.freqToNote(freq);
            } else {
                return;
            }

            const expectedPitch = NoteUtility.noteToPitch(this.note);
            const nextLowestPitch = NoteUtility.noteToPitch(new Note(this.note.index - 1));
            const nextHighestPitch = NoteUtility.noteToPitch(new Note(this.note.index + 1));
            let accuracy: number;

            // calculates the accuracy of the current frequency to the next closest note
            if (freq < expectedPitch) {
                // the frequency is flat
                this.pitchAccidental = ACCIDENTALS.flat;
                accuracy = MathUtility.map(freq, nextLowestPitch, expectedPitch, -1, 1);
            } else {
                // the frequency is sharp
                this.pitchAccidental = ACCIDENTALS.sharp;
                accuracy = MathUtility.map(freq, nextHighestPitch, expectedPitch, -1, 1);
            }
            if (accuracy < 0) {
                accuracy = 0;
            }

            // add the raw accuracy to the buffer
            this.accuracyBuffer.add(accuracy);

            // Rounds the accuracy to prevent unnecessary updates:
            this.accuracy = MathUtility.round(this.accuracyBuffer.average, 3);
        });

        if (CONFIG.debugMode) {
            this.pitchDetectorService.audioSource = new OscillatorSource();
        }

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

    /**
     * Toggle the live playback of the audio source
     * @private
     */
    private setPlayback(inputEvent: InputEvent) {
        if ((<HTMLInputElement>inputEvent.target).checked) {
            this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination);
        } else {
            this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination);
        }
    }

    private resumeContext() {
        this.pitchDetectorService.audioSource.audioContext.resume().then(() => {
            Logger.debug('Audio source resumed');
        }, reason => {
            Logger.error('Audio source failed to resume', reason);
        });
    }

    render() {
        return html`
            ${CONFIG.debugMode ?
                    html`
                        ${this.accuracy}
                        <div>
                            <input type="range" min="400"
                                   max="1300"
                                   @input="${this.updateOscillatorFrequency}">
                        </div>
                    ` : ''
            }
            <div>
                Audio Playback: <input type="checkbox" @input="${this.setPlayback}">
            </div>
            <div @click="${this.resumeContext}">
                <tn-tuner-ring .accuracy="${this.accuracy}" .pitchAccidental="${this.pitchAccidental}"></tn-tuner-ring>
                <tn-tuner-note .note="${this.note}" .accuracy="${this.accuracy}"
                               .clarity="${this.clarity}"></tn-tuner-note>
            </div>
        `;
    }
}
