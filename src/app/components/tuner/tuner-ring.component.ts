import {customElement, property} from 'lit/decorators.js';
import {css, html, LitElement} from 'lit';
import {ACCIDENTALS} from '../../utilities/note-utility';

const TunerRingComponentStyles = css`
  :host {
    --needle-degree: 0rad;
    --opacity: 1;

    --spoke1-degree: 0rad;
    --spoke2-degree: 0rad;
    --spoke3-degree: 0rad;
    --spoke4-degree: 0rad;
    --spoke5-degree: 0rad;
    --spoke6-degree: 0rad;
  }

  .tuner-ring {
    position: absolute;
    width: 200px;
  }

  .spoke {
    --width: 1px;
    background-color: var(--outline-color);

    width: var(--width);
    height: 100px;

    position: absolute;
    left: calc(50% - (var(--width) / 2));
    transform-origin: bottom;
  }

  .spoke1 {
    background-color: red;
    transform: rotate(var(--spoke1-degree));
  }

  .spoke2 {
    background-color: green;
    transform: rotate(var(--spoke2-degree));
  }

  .spoke3 {
    background-color: blue;
    transform: rotate(var(--spoke3-degree));
  }

  .spoke4 {
    background-color: cyan;
    transform: rotate(var(--spoke4-degree));
  }

  .spoke5 {
    background-color: purple;
    transform: rotate(var(--spoke5-degree));
  }

  .spoke6 {
    background-color: pink;
    transform: rotate(var(--spoke6-degree));
  }

  .tuner-needle {
    --width: 5px;

    background: linear-gradient(to bottom, var(--outline-color) 50%, rgba(0, 0, 0, 0) 0%);

    width: var(--width);
    height: 100px;

    position: absolute;
    left: calc(50% - (var(--width) / 2));

    opacity: var(--opacity);
    transform: rotate(var(--needle-degree));
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

    connectedCallback() {
        super.connectedCallback();
    }

    protected updated() {
        const frequencyDegree = this.calculateErrorDegree();

        this.style.setProperty('--needle-degree', frequencyDegree + 'rad');
        this.style.setProperty('--opacity', this.accuracy + '');

        // this.style.setProperty('--spoke1-degree', TunerRingComponent.calculateSpokeAngle() + 'rad');
        this.style.setProperty('--spoke1-degree', TunerRingComponent.calculateSpokeAngle(frequencyDegree, Math.PI / 12) + 'rad');
        this.style.setProperty('--spoke2-degree', TunerRingComponent.calculateSpokeAngle(frequencyDegree, 23 * Math.PI / 12) + 'rad');

        this.style.setProperty('--spoke3-degree', TunerRingComponent.calculateSpokeAngle(frequencyDegree, Math.PI / 6) + 'rad');
        // this.style.setProperty('--spoke4-degree', TunerRingComponent.calculateSpokeAngle(frequencyDegree, Math.PI / 6) + 'rad');

        // this.style.setProperty('--spoke5-degree', TunerRingComponent.calculateSpokeAngle(frequencyDegree, Math.PI / 8) + 'rad');
        // this.style.setProperty('--spoke6-degree', -TunerRingComponent.calculateSpokeAngle(frequencyDegree, Math.PI / 8) + 'rad');

        // this.style.setProperty('--spoke3-degree', TunerRingComponent.calculateSpokeAngle(-(frequencyDegree + 2) / 4) + 'rad');
        // this.style.setProperty('--spoke4-degree', TunerRingComponent.calculateSpokeAngle(-(frequencyDegree - 2) / 4) + 'rad');
    }

    private calculateErrorDegree(): number {
        // convert the accuracy of the note to a degree
        const degree: number = (1 - this.accuracy) * (Math.PI / 2);

        // if the note is flat return a negative degree (rotate to the left) otherwise positive
        switch (this.pitchAccidental) {
            case ACCIDENTALS.flat:
                return degree * -1;
            case ACCIDENTALS.sharp:
                return degree;
        }
    }

    private static calculateSpokeAngle(theta: number, constant: number) {
        return Math.cos(theta + constant) * (Math.PI / 2) * constant;
        // return 1 / (theta + (1 / constant))
        // private static calculateSpokeAngle(theta: number, amplitude: number) {
        // const frequency = 1;
        // // const amplitude = (Math.PI/2);
        // // const
        // if (theta > (frequency + 1)) {
        //     return -amplitude;
        // } else if (theta < -(frequency + 1)) {
        //     return amplitude;
        // } else {
        //     return Math.sin(-theta * frequency + (frequency * 1)) * amplitude;
        // }
        // return Math.abs(theta / 4);
        // return Math.cos(theta + Math.PI/2) * (Math.PI/2);
        // const constant = (Math.PI / 2);
        // return Math.cos(theta)* (Math.PI / 2);
    }

    render() {
        return html`
            <div class="tuner-ring">
                <div class="spoke spoke1"></div>
                <div class="spoke spoke2"></div>
                <div class="spoke spoke3"></div>
                <div class="spoke spoke4"></div>
                <div class="spoke spoke5"></div>
                <div class="spoke spoke6"></div>
                <div class="tuner-needle"></div>
            </div>
        `;
    }
}
