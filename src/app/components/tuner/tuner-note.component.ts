import {css, html, LitElement, svg} from "lit";
import {customElement, property} from 'lit/decorators.js';
import {PitchDetectorService} from "../../services/pitch-detector.service";
import {NoteUtility, Note} from "../../utilities/note-utility";

const TunerNoteComponentStyles = css`
    .tuner-text {
        width: 200px;
        stroke: var(--outline-color);
        text-align: center;
    }

    .tuner-note-letter {
      stroke-width: 3;
      fill: url(#noteGradient);
      font: bold 4em sans-serif;
    }
  
    .tuner-note-accidental {
      stroke-width: 1;
      font: bold 2em sans-serif;
    }
  
    .tuner-note-octave {
        stroke-width: 1;
        font: bold 2em sans-serif;
    }
  
    .tuner-stop-color1 {
      stop-color: var(--primary-color);
    }
    .tuner-stop-color2 {
      stop-color: var(--background-color);
    }
`;

@customElement('tn-tuner-note')
export class TunerNoteComponent extends LitElement {

    static styles = TunerNoteComponentStyles;

    pitchDetectorService = new PitchDetectorService(60);

    @property()
    note: Note = new Note(0);

    @property()
    percent = '50%';

    connectedCallback() {
        super.connectedCallback();
        this.pitchDetectorService.setOnListen((freq, clarity) => {
            if (clarity > 0.8) {
                this.note = NoteUtility.freqToNote(freq);
            }
            if (this.note.index > 0 && this.note.index < 127) {
                const expectedPitch = NoteUtility.noteToPitch(this.note);
                const nextLowestPitch = NoteUtility.noteToPitch(new Note(this.note.index - 1));
                const nextHighestPitch = NoteUtility.noteToPitch(new Note(this.note.index + 1));
                // if lower than expectedFreq map from next lowest note to expectedFreq
                if (freq < expectedPitch) {
                    this.percent = this.map(freq, nextLowestPitch, expectedPitch, -100, 100) + '%';
                } else {
                    this.percent = this.map(freq, nextHighestPitch, expectedPitch, -100, 100) + '%';
                }
            }
        });
        this.pitchDetectorService.startListening();
    }

    map = (value: number, x1: number, y1: number, x2: number, y2: number) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

    render() {
        return html`
            <div class="tuner-text">
                ${this.percent}
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100%" height="100%"/>
                    <text class="tuner-note-letter" x="50%" y ="50%" dominant-baseline="central" text-anchor="middle">${this.note.letter}</text>
                    <text class="tuner-note-accidental" x="65%" y ="25%" dominant-baseline="central" text-anchor="middle">
                        ${this.note.accidental}
                    </text>
                    <text class="tuner-note-octave" x="65%" y ="75%" dominant-baseline="central" text-anchor="middle">${this.note.octave}</text>
                    <defs>
                        <linearGradient id="noteGradient" gradientTransform="rotate(-90) translate(-1,0)">
                            <stop class="tuner-stop-color1" offset=${this.percent}/>
                            <stop class="tuner-stop-color2" offset=${this.percent}/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
`;
    }
}
