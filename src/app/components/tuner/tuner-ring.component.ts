import {customElement, property} from 'lit/decorators.js';
import {css, html, LitElement} from 'lit';
import {ACCIDENTALS} from '../../utilities/note-utility';

const TunerRingComponentStyles = css`
  :host {
    --degree: 10deg;
    --opacity: 1;
  }

  .tuner-ring {
    position: absolute;
    width: 200px;
  }

  .tuner-needle {
    --width: 5px;

    background: linear-gradient(to bottom, var(--outline-color) 50%, rgba(0, 0, 0, 0) 0%);

    width: var(--width);
    height: 100px;

    position: absolute;
    left: calc(50% - (var(--width) / 2));

    opacity: var(--opacity);
    transform: rotate(var(--degree));
    transform-origin: bottom;
  }
`;

@customElement('tn-tuner-ring')
export class TunerRingComponent extends LitElement {

    static styles = TunerRingComponentStyles;

    @property()
    accuracy = 50;

    @property()
    pitchAccidental: ACCIDENTALS;

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    protected updated() {
        this.style.setProperty('--degree', this.calculateErrorDegree() + 'deg');
        this.style.setProperty('--opacity', this.accuracy + '');
    }

    private calculateErrorDegree(): number {
        // convert the accuracy of the note to a degree
        const degree: number = (1 - this.accuracy) * 90;

        // if the note is flat return a negative degree (rotate to the left) otherwise positive
        switch (this.pitchAccidental) {
            case ACCIDENTALS.flat:
                return degree * -1;
            case ACCIDENTALS.sharp:
                return degree;
        }
    }


    render() {
        return html`
            <div class="tuner-ring">
                <div class="tuner-needle"></div>
            </div>
        `;
    }
}
