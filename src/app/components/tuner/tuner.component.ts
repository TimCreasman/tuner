import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ACCIDENTALS, Note, NoteUtility} from '../../utilities/note-utility';
import {OscillatorSource, PitchDetectorService} from '../../services/pitch-detector.service';
import {MathUtility} from '../../utilities/math-utility';
import {CONFIG} from '../../../config';
import {Logger} from '../../utilities/log-utility';

const TunerComponentStyles = css`
  :root {
    --doc-height: 100%;
  }

  .tuner-body {
    width: 100%;
    height: 100vh; /* fallback for Js load */
    height: var(--doc-height);
  }
`;

@customElement('tn-tuner')
export class TunerComponent extends LitElement {

    static styles = TunerComponentStyles;

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
    accuracy = 0;

    @property()
    clarity = 1;

    inTune = false;

    /**
     * The accidental of the incoming pitch
     */
    @property()
    pitchAccidental: ACCIDENTALS | undefined;

    connectedCallback() {
        super.connectedCallback();

        this.calculateDocumentHeight();

        this.pitchDetectorService.setOnListen((freq, clarity, volume) => {
            this.clarity = clarity;
            // only update if we are above the volume and clarity thresholds
            if (volume < 0.1 && clarity < 0.99) {
                return;
            }

            this.note = NoteUtility.freqToNote(freq);
            const expectedPitch = NoteUtility.noteToPitch(this.note);
            const nextLowestPitch = NoteUtility.noteToPitch(new Note(this.note.index - 1));
            const nextHighestPitch = NoteUtility.noteToPitch(new Note(this.note.index + 1));
            let accuracy: number;

            // calculates the accuracy of the current frequency to the next closest note
            if (freq < expectedPitch) {
                // the frequency is flat
                this.pitchAccidental = ACCIDENTALS.flat;
                accuracy = MathUtility.map(freq, [nextLowestPitch, expectedPitch], [-1, 1]);
            } else {
                // the frequency is sharp
                this.pitchAccidental = ACCIDENTALS.sharp;
                accuracy = MathUtility.map(freq, [nextHighestPitch, expectedPitch], [-1, 1]);
            }
            if (accuracy < 0) {
                accuracy = 0;
            }

            this.inTune = accuracy > 0.95;

            // Rounds the accuracy to prevent unnecessary updates:
            this.accuracy = accuracy;
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
     * Calculates the height of the document. We have to use this method as the vh css units are unreliable on mobile devices.
     * @private
     */
    private calculateDocumentHeight(): void {
        const documentHeight = () => {
            const doc = document.documentElement;
            doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
        };
        window.addEventListener('resize', documentHeight);
        documentHeight();
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

            <div class="tuner-body" data-test-id="tuner.body" @click="${this.resumeContext}">
                <tn-tuner-ring .accuracy="${this.accuracy}" .pitchAccidental="${this.pitchAccidental}"></tn-tuner-ring>
                <tn-tuner-note .note="${this.note}" .accuracy="${this.accuracy}"
                               .clarity="${this.clarity}"></tn-tuner-note>
            </div>
            ${CONFIG.debugMode ?
                    html`
                        <div style="z-index: 1000">
                            <p>${this.pitchDetectorService.pitch}</p>
                            <p>${this.pitchDetectorService.clarity}</p>
                            <p>${this.pitchDetectorService.volume}</p>
                            <div data-test-id="tuner.debug-info">
                                <input type="range" min="400"
                                       max="1300"
                                       @input="${this.updateOscillatorFrequency}">
                            </div>
                            <div data-test-id="tuner.audio-slider">
                                Audio Playback: <input type="checkbox" @input="${this.setPlayback}">
                            </div>
                        </div>
                    ` : ''
            }
        `;
    }
}
