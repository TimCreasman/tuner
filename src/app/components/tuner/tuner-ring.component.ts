import {customElement, property} from 'lit/decorators.js';
import {css, html, LitElement, nothing, TemplateResult} from 'lit';
import {ACCIDENTALS} from '../../utilities/note-utility';
import {MathUtility} from '../../utilities/math-utility';
import bezier from 'bezier-easing';
import { ConfigService } from '../../services/config.service';

const TunerRingComponentStyles = css`
  :host {
    --needle-degree: 0rad;
    --opacity: 1;
  }

  .tuner-needle {
    --width: 1.5vmin;

    background: linear-gradient(0deg, transparent 70%, rgb(var(--primary-color)) 30%);
    width: var(--width);
    height: 52%;
    position: absolute;
    left: calc(50% - (var(--width) / 2));
    bottom: 50%;
    border-radius: 25%;

    opacity: var(--opacity);
    transform: rotate(var(--needle-degree));
    transform-origin: bottom;
    transition: all cubic-bezier(0, 0, .2, 1.3) 300ms
  }

  .ring {
    position: absolute;
    height: 80%;
    width: 80%;
    left: 10%;
    top: 10%;
  }

  .top-spokes > tn-spoke {
    background-color: rgb(var(--highlight-color));
  }

  .bottom-spokes > tn-spoke {
    background-color: rgb(var(--primary-color));
  }
`;

@customElement('tn-tuner-ring')
export class TunerRingComponent extends LitElement {

    static styles = TunerRingComponentStyles;

    @property()
    accuracy = 0;

    @property()
    volume = 0;

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

    render() {
        const topRing: TemplateResult[] = [];
        const bottomRing: TemplateResult[] = [];
        const spokeCount = 41;

        // create ring of spokes
        for (let i = 0; i < spokeCount; i++) {
            // Where along the arc to place the spoke in radians
            const spokeArcPosition = i * (Math.PI / (spokeCount - 1)) - Math.PI / 2;
            // Select the three middle spokes
            const middleSpokes = i >= (spokeCount - 3) / 2 && i <= (spokeCount + 1) / 2;
            // Find the closeness between the spoke position and the note accuracy (in frequency)
            const spokeAccuracy = TunerRingComponent.angleDifference(spokeArcPosition, this.convertAccuracyToRadians());
            // Map the accuracy (which is in radians) to a value between 0 and 1
            const topRingScaleFactor = MathUtility.map(spokeAccuracy, [Math.PI, 0], [0, 1]);
            const bottomRingScaleFactor = MathUtility.clamp(this.volume * 8, [0.3, 0.9]);

            topRing.push(html`
                <tn-spoke .index="${i}" .scaleFactor="${topRingScaleFactor}"
                          .arcPosition="${spokeArcPosition}" .isMiddle="${middleSpokes}"></tn-spoke>
            `);
            bottomRing.push(html`
                <tn-spoke .index="${i}" .scaleFactor="${bottomRingScaleFactor}"
                          .arcPosition="${spokeArcPosition + Math.PI}"></tn-spoke>
            `);
        }

        return html`
            <div class="tuner-ring">
                <div class="ring">
                    <span class="top-spokes">
                        ${ConfigService.getComponent('frequencyRing') ? topRing : nothing}
                    </span>
                    <span class="bottom-spokes">
                        ${ConfigService.getComponent('volumeRing') ? bottomRing : nothing}
                    </span>
                </div>
                ${ConfigService.getComponent('needle') ? html`<div class="tuner-needle"></div>` : nothing}
            </div>
        `;
    }
}

const SpokeComponentStyles = css`
  :host {
    --x-scale: 1;
    --y-scale: 1;
    --angle: 0;

    position: absolute;
    height: 4vmin;
    width: 0.3vmin;
    border-radius: 25%;
    transform: translate(-50%, 50%) rotate(var(--angle)) scaleX(var(--x-scale)) scaleY(var(--y-scale));

    transition: all cubic-bezier(0, 0, .2, 1.3) 600ms;
  }

`;

@customElement('tn-spoke')
export class SpokeComponent extends LitElement {

    static styles = SpokeComponentStyles;

    // The amount to scale the spoke
    @property()
    scaleFactor = 0;

    // The angle at which the spoke starts
    @property()
    arcPosition = 0;

    @property()
    index = 0;

    @property()
    isMiddle = false;

    connectedCallback() {
        super.connectedCallback();
        if (this.isMiddle) {
            this.style.setProperty('background', 'rgb(var(--primary-color))');
        }
        this.setupPosition();
    }

    protected updated() {
        const falloff = bezier(0, 0, 1, 0);
        const scale = this.scaleFactor;
        const inverseScale = MathUtility.map(this.scaleFactor, [0, 1], [1, 0]);
        const size = falloff(scale) * 5;
        const squish = falloff(inverseScale) * 15;
        this.style.setProperty('--x-scale', size + squish + '');
        this.style.setProperty('--y-scale', size + '');
    }

    private setupPosition() {
        const bottom = 50 * Math.cos(this.arcPosition) + 50 + '%';
        const left = 50 * Math.sin(this.arcPosition) + 50 + '%';
        this.style.setProperty('bottom', bottom);
        this.style.setProperty('left', left);
        this.style.setProperty('--angle', this.arcPosition + 'rad');
    }
}
