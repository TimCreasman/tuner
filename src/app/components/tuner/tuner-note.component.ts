import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {Note} from '../../utilities/note-utility';

const TunerNoteComponentStyles = css`
  .tuner-note {
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

    @property()
    note: Note = new Note(0);

    @property()
    accuracy = 50;

    render() {
        return html`
            <div class="tuner-note">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100%" height="100%"/>
                    <text class="tuner-note-letter" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">
                        ${this.note.letter}
                    </text>
                    <text class="tuner-note-accidental" x="65%" y="25%" dominant-baseline="central"
                          text-anchor="middle">
                        ${this.note.accidental}
                    </text>
                    <text class="tuner-note-octave" x="65%" y="75%" dominant-baseline="central" text-anchor="middle">
                        ${this.note.octave}
                    </text>
                    <defs>
                        <linearGradient id="noteGradient" gradientTransform="rotate(-90) translate(-1,0)">
                            <stop class="tuner-stop-color1" offset=${(this.accuracy * 100) + '%'}/>
                                <stop class="tuner-stop-color2" offset=${(this.accuracy * 100) + '%'}/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        `;
    }
}
