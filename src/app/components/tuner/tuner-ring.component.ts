import {customElement, property} from 'lit/decorators.js';
import {css, html, LitElement} from 'lit';
import {ACCIDENTALS} from '../../utilities/note-utility';
import {MathUtility} from '../../utilities/math-utility';
import bezier from 'bezier-easing';

const TunerRingComponentStyles = css`
  :host {
    --needle-degree: 0rad;
    --opacity: 1;
  }

  .tuner-needle {
    --width: 2vmin;

    background: linear-gradient(0deg, transparent 70%, var(--primary-color) 30%);
    width: var(--width);
    height: 55%;
    position: absolute;
    left: calc(50% - (var(--width) / 2));
    bottom: 55%;
    border-radius: 25%;

    opacity: var(--opacity);
    transform: rotate(var(--needle-degree));
    transform-origin: bottom;
    transition: all cubic-bezier(0, 0, .2, 1.3) 300ms
  }

  .tuner-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75vw;
    max-width: 75vh;
  }

  .tuner-ring:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .ring {
    position: absolute;
    height: 90%;
    width: 90%;
    left: 5%;
    border-radius: 50%;

    box-shadow: 0 2vmin 0 var(--primary-color);
  }
`;

@customElement('tn-tuner-ring')
export class TunerRingComponent extends LitElement {

    static styles = TunerRingComponentStyles;

    @property()
    accuracy = 0;

    @property()
    pitchAccidental: ACCIDENTALS;

    protected updated() {
        // Degree goes from -PI/2 to PI/2 with straight-up being 0
        this.style.setProperty('--needle-degree', this.convertAccuracyToRadians() + 'rad');
    }

    private convertAccuracyToRadians(): number {
        let radians: number = this.accuracy * (Math.PI / 2) - Math.PI / 2;

        if (this.pitchAccidental == ACCIDENTALS.sharp) {
            radians *= -1;
        }

        // map the accuracy of the note to radians around the entire circle
        return radians;
    }

    render() {
        const rectangles = [];
        const circleCount = 50;

        for (let i = 0; i < circleCount; i++) {
            // divide the semicircle into even parts, and start placing rectangles from the left.
            const offsetDegree = ((Math.PI) / circleCount) * i;
            const isMiddle = i <= ((circleCount / 2) + 1) && i >= ((circleCount / 2) - 1);

            rectangles.push(html`
                <tn-circle .index="${i}" .frequencyDegree="${this.convertAccuracyToRadians()}"
                           .targetDegree="${(offsetDegree - Math.PI / 2)}" .isMiddle="${isMiddle}"></tn-circle>
            `);
        }

        return html`
            <div class="tuner-ring">
                <div class="ring">
                    <span class="circles">
                        ${rectangles}
                    </span>
                </div>
                <div class="tuner-needle"></div>
            </div>
        `;
    }
}

const CircleComponentStyles = css`
  :host {
    --bottom: 0%;
    --left: 0%;
    --x-scale: 1;
    --y-scale: 1;
    --z-index: 0;
    --inner-opacity: 1;
    --opacity: 1;
    --angle: 0;

    bottom: var(--bottom);
    left: var(--left);
    position: absolute;
    height: 4vmin;
    width: 0.4vmin;
    background-color: var(--highlight-color);
    border-radius: 25%;
    transform: translate(-50%, 50%) rotate(var(--angle)) scaleX(var(--x-scale)) scaleY(var(--y-scale));
    z-index: var(--z-index);

    transition: all cubic-bezier(0, 0, .2, 1.3) 600ms, z-index 0ms;
  }

`;

@customElement('tn-circle')
export class CircleComponent extends LitElement {

    static styles = CircleComponentStyles;

    @property()
    frequencyDegree = 0;

    @property()
    targetDegree = 0;

    @property()
    index = 0;

    @property()
    isMiddle = false;

    connectedCallback() {
        super.connectedCallback();
        this.setupPosition();
    }

    protected updated() {
        const difference = CircleComponent.angleDifference(this.targetDegree, this.frequencyDegree);

        // Map the difference in angles to other scales:
        const quarterCircle: [number, number] = [0, Math.PI];

        const falloff = bezier(0, 0, 1, 0);
        const scale = MathUtility.map(difference, quarterCircle, [1, 0]);
        const inverseScale = MathUtility.map(difference, quarterCircle, [0, 1]);
        const size = falloff(scale) * 5;
        const squish = falloff(inverseScale) * 15;
        const opacity = size;
        this.style.setProperty('--x-scale', size + squish + '');
        this.style.setProperty('--y-scale', size + '');
        this.style.setProperty('--opacity', opacity + '');
    }

    /**
     * Calculates the true difference between two angles in radians
     * @param angle1
     * @param angle2
     * @private
     */
    private static angleDifference(angle1: number, angle2: number): number {
        let angle = angle1 - angle2;
        angle += (angle > Math.PI) ? -(2 * Math.PI) : (angle < -Math.PI) ? (2 * Math.PI) : 0;
        return Math.abs(angle);
    }

    private setupPosition() {
        if (this.isMiddle) {
            this.style.setProperty('background', 'var(--primary-color)');
        }
        const bottom = 50 * Math.cos(this.targetDegree) + 50 + '%';
        const left = 50 * Math.sin(this.targetDegree) + 50 + '%';
        this.style.setProperty('--bottom', bottom);
        this.style.setProperty('--left', left);
        this.style.setProperty('--angle', this.targetDegree + 'rad');
    }
}
