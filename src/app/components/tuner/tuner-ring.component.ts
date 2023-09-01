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

  .tuner-ring {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .tuner-needle {
    --width: 5px;

    background: white;

    width: var(--width);
    height: 50%;

    position: absolute;
    left: calc(50% - (var(--width) / 2));

    opacity: var(--opacity);
    transform: rotate(var(--needle-degree));
    transform-origin: bottom;
  }

  .ring {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    outline: 0.5rem solid white;
    outline-offset: -0.25rem;
  }

  .circles {
    outline: red;
  }
`;

@customElement('tn-tuner-ring')
export class TunerRingComponent extends LitElement {

    static styles = TunerRingComponentStyles;

    @property()
    accuracy = 0;

    @property()
    pitchAccidental: ACCIDENTALS;

    frequencyDegree = 0;

    protected updated() {
        // Degree goes from -PI/2 to PI/2 with straight-up being 0
        this.frequencyDegree = this.convertAccuracyToRadians();
        this.style.setProperty('--needle-degree', this.frequencyDegree + 'rad');
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
        const circles = [];
        const circleCount = 16;

        for (let i = 0; i < circleCount; i++) {
            // divide the semicircle into even parts, and start placing circles from the left.
            const offsetDegree = ((Math.PI) / circleCount) * i;

            circles.push(html`
                <tn-circle .index="${i}" .frequencyDegree="${this.frequencyDegree}"
                           .targetDegree="${(offsetDegree - Math.PI / 2)}"></tn-circle>
            `);
        }

        return html`
            <div class="tuner-ring">
                <!--                <div class="tuner-needle"></div>-->
                <div class="ring">
                    <span class="circles">
                        ${circles}
                    </span>
                </div>
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
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    //outline: 0.1rem solid var(--outline-color);
    //outline-offset: -0.1rem;
    border: 0.1rem solid var(--outline-color);
    background-color: var(--primary-color);
    transform: translate(-50%, 50%) rotate(var(--angle)) scaleX(var(--x-scale)) scaleY(var(--y-scale));
    z-index: var(--z-index);
    opacity: var(--opacity);

    transition: all cubic-bezier(0, 0, .2, 1.3) 300ms, z-index 0ms;
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

        const zIndex = Math.floor(MathUtility.map(difference, quarterCircle, [23, 4]));

        this.style.setProperty('--x-scale', size + squish + '');
        this.style.setProperty('--y-scale', size + '');
        // Ensure the biggest circle appears on top:
        this.style.setProperty('--z-index', zIndex + '');
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
        const bottom = 50 * Math.cos(this.targetDegree) + 50 + '%';
        const left = 50 * Math.sin(this.targetDegree) + 50 + '%';
        this.style.setProperty('--bottom', bottom);
        this.style.setProperty('--left', left);
        this.style.setProperty('--angle', this.targetDegree + 'rad');
    }
}
