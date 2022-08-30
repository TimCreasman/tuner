import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {Note} from '../../utilities/note-utility';
import {MathUtility} from '../../utilities/math-utility';

const TunerNoteComponentStyles = css`
  .tuner-note {
    width: 200px;
    text-align: center;
  }

  .tuner-note-border {
    stroke: var(--outline-color);
  }

  .tuner-note-letter {
    stroke: var(--outline-color);
    stroke-width: 3;
    font: bold 4em sans-serif;
  }

  .tuner-note-letter-inside {
    stroke: black;
    stroke-width: 2.5;
    fill: white;
    font: bold 4em sans-serif;
  }

  .tuner-note-accidental {
    stroke: var(--outline-color);
    stroke-width: 1;
    font: bold 2em sans-serif;
  }

  .tuner-note-octave {
    stroke: var(--outline-color);
    stroke-width: 1;
    font: bold 2em sans-serif;
  }

  .tuner-stop-color1 {
    stop-color: var(--primary-color);
  }

  .tuner-stop-color2 {
    stop-color: var(--background-color);
  }

  .mask-fill {
    fill: var(--primary-color);
  }
`;

@customElement('tn-tuner-note')
export class TunerNoteComponent extends LitElement {

    static styles = TunerNoteComponentStyles;

    @property()
    note: Note = new Note(0);

    @property()
    accuracy = 50;

    private sineTest(): number {
        return Math.sin(Date.now() / 100);
    }

    render() {
        return html`
            <div class="tuner-note">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect class="tuner-note-border" x="0" y="0" width="100%" height="100%"/>
                    <text class="tuner-note-letter" x="50%" y="50%" dominant-baseline="central"
                          text-anchor="middle">
                        ${this.note.letter}
                    </text>


                    <g class="mask-fill" mask="url(#letter-mask)">
                        <use href="#wave-effect" x="25%"
                             y="${(MathUtility.map(this.accuracy, 0, 1, 75, 25)) + '%'}"></use>

                        <rect x="25%" y="${(MathUtility.map(this.accuracy, 0, 1, 75, 25)) + '%'}"
                              width="50%"

                              height="${((this.accuracy * 50)) + '%'}"
                        ></rect>
                    </g>


                    <text class="tuner-note-accidental" x="65%" y="25%" dominant-baseline="central"
                          text-anchor="middle">
                        ${this.note.accidental}
                    </text>

                    <text class="tuner-note-octave" x="65%" y="75%" dominant-baseline="central"
                          text-anchor="middle">
                        ${this.note.octave}
                    </text>
                    <defs>
                        <path id="wave-effect"
                              d="${'M' + (10 ** this.sineTest()) + ',0.3 C' + (20 * this.sineTest() + 50) + ',-4 ' + (20 * this.sineTest()) + ',-4 ' + (10 ** this.sineTest() + 50) + ' ,0'}"></path>
                        <mask id="letter-mask">
                            <text class="tuner-note-letter-inside" x="50%" y="50%" dominant-baseline="central"
                                  text-anchor="middle">
                                ${this.note.letter}
                            </text>
                        </mask>
                    </defs>
                </svg>
            </div>
        `;
    }
}

/*

Add a curve path
Use the <use> tag to apply the path to the mask

*/
