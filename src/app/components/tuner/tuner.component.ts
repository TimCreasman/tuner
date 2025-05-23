import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ACCIDENTALS, Note, NoteUtility} from '../../utilities/note-utility';
import {PitchDetectorService} from '../../services/pitch-detector.service';
import {MathUtility} from '../../utilities/math-utility';
import {Logger} from '../../utilities/log-utility';
import {OscillatorSource} from '../../models/audio.model';
import { CarouselComponent } from '../shared/carousel.component';

@customElement('tn-tuner')
export class TunerComponent extends LitElement {

  /**
   * Reference to the pitch detector service
   * @private
   */
  private pitchDetectorService = PitchDetectorService.Instance();

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

  @property()
  volume = 0;

  @property({ attribute: CarouselComponent.slideShownAttribute, converter: (value: string) => {
        return value === 'true';
    }})
  isShown = true;

  inTune = false;

  /**
   * The accidental of the incoming pitch
   */
  @property()
  pitchAccidental: ACCIDENTALS | undefined;

  connectedCallback() {
    super.connectedCallback();

    this.pitchDetectorService.setOnListen((freq, clarity, volume) => {
      this.clarity = clarity;
      this.volume = volume;
      // only update if we are above the volume and clarity thresholds
      if (volume < 0.01 || clarity < 0.95) {
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

      this.accuracy = accuracy;
    });
    // this.pitchDetectorService.audioSource = new OscillatorSource();

    this.pitchDetectorService.startListening();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.pitchDetectorService.stopListening();
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
        if (this.isShown) {
            this.pitchDetectorService.startListening();
        } else {
            this.pitchDetectorService.stopListening();
        }
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
        <!-- <div>
                <input type="range" min="200"
                                   max="300"
                                   @input="${this.updateOscillatorFrequency}">
                        </div>
 <div>
                Audio Playback: <input type="checkbox" @input="${this.setPlayback}">
            </div> -->
        <div data-test-id="tuner.body" @click="${this.resumeContext}">
            <tn-tuner-ring .accuracy="${this.accuracy}" .pitchAccidental="${this.pitchAccidental}"
                           .volume="${this.volume}"></tn-tuner-ring>
            <tn-tuner-note .note="${this.note}" .accuracy="${this.accuracy}"
                           .clarity="${this.clarity}"></tn-tuner-note>
        </div>
    `;
  }
}
