import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {Note} from '../../utilities/note-utility';
import {MathUtility} from '../../utilities/math-utility';

const TunerNoteComponentStyles = css`
  .tuner-note-container {
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

  .tuner-note-letter-mask {
    stroke: black;
    fill: white;
    font: bold 4em sans-serif;
  }

  .tuner-note-accidental {
    stroke: var(--outline-color);
    stroke-width: 1;
    font: bold 2em sans-serif;
  }

  .tuner-note-accidental-mask {
    stroke: black;
    stroke-width: 1;
    fill: white;
    font: bold 2em sans-serif;
  }

  .tuner-note-octave {
    stroke: var(--outline-color);
    stroke-width: 1;
    font: bold 2em sans-serif;
  }

  .tuner-note-octave-mask {
    stroke: black;
    stroke-width: 1;
    fill: white;
    font: bold 2em sans-serif;
  }

  .tuner-liquid {
    fill: var(--primary-color);
  }
`;

@customElement('tn-tuner-note')
export class TunerNoteComponent extends LitElement {

    static styles = TunerNoteComponentStyles;

    private static bufferSize = 25;

    @property()
    note: Note = new Note(0);

    @property()
    clarity = 1;

    @property({type: Number})
    set accuracy(newValue: number) {
        this.updateBuffer(MathUtility.round(newValue, 3));
    }

    @query('#height-animator')
    private heightAnimatorReference: HTMLElement;
    private readonly heightAnimator: HeightAnimatorComponent;

    private accuracyBuffer: number[] = [TunerNoteComponent.bufferSize];

    private get accuracyAverage() {
        return this.accuracyBuffer.reduce((a, b) => a + b) / this.accuracyBuffer.length;
    }

    constructor() {
        super();
        this.heightAnimator = new HeightAnimatorComponent();
    }

    private updateBuffer(accuracy: number) {
        this.accuracyBuffer.push(accuracy);
        if (this.accuracyBuffer.length === TunerNoteComponent.bufferSize) {
            this.accuracyBuffer.shift();
        }
    }

    private updateHeightAnimation() {
        if (!this.heightAnimatorReference) {
            return;
        } else {
            this.heightAnimator.reference = this.heightAnimatorReference;
        }

        const newHeight = MathUtility.map(this.accuracyAverage, 0, 1, 90, 25);
        this.heightAnimator.to = newHeight + '';
    }

    render() {

        this.updateHeightAnimation();

        return html`
            <div class="tuner-note-container">
                <svg id="view" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <use href="#note-letter" class="tuner-note-letter"/>

                    <use href="#liquid-effect" mask="url(#note-mask)"/>

                    <use href="#note-octave" class="tuner-note-octave"/>
                    <use href="#note-accidental" class="tuner-note-accidental"/>

                    <defs>
                        <!-- Define the text used in the scene -->
                        <text id="note-letter" x="50%" y="50%" dominant-baseline="central"
                              text-anchor="middle">
                            ${this.note.letter}
                        </text>
                        <text id="note-accidental" x="65%" y="25%" dominant-baseline="central"
                              text-anchor="middle">
                            ${this.note.accidental}
                        </text>
                        <text id="note-octave" x="65%" y="75%" dominant-baseline="central" text-anchor="middle">
                            ${this.note.octave}
                        </text>

                        <!-- Defines the liquid effect that fills up the note -->
                        <g id="liquid-effect" class="tuner-liquid">
                            <rect width="50%" height="65%"/>
                            <path id="liquid-top"
                                  d="M 0,0.3 C 50,-4 0,-4 50,0"/>

                            <!-- Animates the top of the liquid -->
                            <animate href="#liquid-top"
                                     attributeName="d"
                                     attributeType="XML"
                                     values="M 0,0.3 C 12.5,0 37.5,-10 50,0; 
                                    M 0,0.3 C 12.5,-10 37.5,0 50,0; 
                                    M 0,0.3 C 12.5,0 37.5,-10 50,0"
                                     dur="0.7s"
                                     calcMode="spline"
                                     keySplines="0.6 0.3 0.3 1; 0.6 0.3 0.3 1"
                                     repeatCount="indefinite"/>

                            <!-- Animates the liquid height -->
                            <animateTransform
                                    id="height-animator"
                                    @endEvent="${this.heightAnimator.onEndEvent}"
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    fill="freeze"
                                    restart="whenNotActive"
                                    values="25, 20; 25, 35"
                                    calcMode="spline"
                                    keySplines="0.5 0 0.5 1"
                                    dur="0.5s"/>
                        </g>

                        <!-- Defines the mask used to create the cutout of the liquid -->
                        <mask id="note-mask">
                            <use href="#note-letter" class="tuner-note-letter-mask"/>
                        </mask>
                    </defs>
                </svg>
            </div>
        `;
    }
}

/* This section has to be housed as a wrapper class since shadow dom does not currently support nested svg elements */

class HeightAnimatorComponent {

    private static fromMatcher = /-?\d+\.?\d*(?=;)/g;
    private static toMatcher = /-?\d+\.?\d*$/g;

    private _reference: HTMLElement;

    set reference(source: HTMLElement) {
        this._reference = source;
    }

    public get from(): string {
        return this._reference.getAttribute('values').match(HeightAnimatorComponent.fromMatcher)[0];
    }

    public set from(value: string) {
        this._reference.setAttribute('values', this._reference.getAttribute('values').replace(HeightAnimatorComponent.fromMatcher, value));
    }

    public get to() {
        return this._reference.getAttribute('values').match(HeightAnimatorComponent.toMatcher)[0];
    }

    public set to(value: string) {
        this._reference.setAttribute('values', this._reference.getAttribute('values').replace(HeightAnimatorComponent.toMatcher, value));
    }

    public onEndEvent() {
        this.from = this.to;
    }

}


