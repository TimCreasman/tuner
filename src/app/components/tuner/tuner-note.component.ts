import { css, html, LitElement, nothing, PropertyValues, svg } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { Note } from '../../utilities/note-utility';
import { MathUtility } from '../../utilities/math-utility';
import { ConfigService } from '../../services/config.service';

const TunerNoteComponentStyles = css`
    :host {
        font-family: var(--font-family);
    }

    .tuner-note-stroke-half {
        stroke: rgb(var(--highlight-color));
        stroke-linecap: round;
        stroke-width: 0.5;
    }

    .tuner-note-stroke-full {
        stroke: rgb(var(--highlight-color));
        stroke-width: 1;
    }

    .tuner-note-letter {
        fill: rgb(var(--background-color));
        font-size: 2.5em;
    }

    .tuner-note-letter-mask {
        stroke: black;
        stroke-width: 0.5;
        fill: white;
        font-size: 2.5em;
    }

    .tuner-note-accidental {
        fill: rgb(var(--background-color));
        stroke: rgb(var(--primary-color));
        font-size: 1em;
    }

    .tuner-note-accidental-mask {
        stroke: black;
        stroke-width: 0.5;
        fill: white;
        stroke-linecap: round;
        font-size: 1em;
    }

    .tuner-note-octave {
        fill: rgb(var(--background-color));
        stroke: rgb(var(--primary-color));
        font-size: 1em;
    }

    .tuner-note-octave-mask {
        stroke: black;
        stroke-width: 0.5;
        fill: white;
        font-size: 1em;
    }

    .tuner-liquid {
        fill: rgb(var(--text-color));
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

    @property({ type: Number })
    accuracy = 0;

    @query('#height-animator')
    private heightAnimatorReference: HTMLElement;
    private readonly heightAnimator: HeightAnimatorComponent;

    private accuracyBuffer: number[] = [TunerNoteComponent.bufferSize];

    constructor() {
        super();
        this.heightAnimator = new HeightAnimatorComponent();
    }

    private updateHeightAnimation() {
        if (!this.heightAnimatorReference) {
            return;
        } else {
            this.heightAnimator.reference = this.heightAnimatorReference;
        }

        const newHeight = MathUtility.map(this.accuracy, [0, 1], [90, 25]);
        this.heightAnimator.to = newHeight + '';
    }

    protected update(changedProperties: PropertyValues) {
        super.update(changedProperties);
        if (isNaN(Number(changedProperties.get('accuracy')))) {
            return;
        }
        this.updateHeightAnimation();

    }

    render() {
        const octaveClasses = { 
            'tuner-note-stroke-half': ConfigService.getComponent('noteOutline'),
            'tuner-note-octave': true
        };

        const noteClasses = { 
            'tuner-note-stroke-full': ConfigService.getComponent('noteOutline'),
            'tuner-note-letter': true
        };

        const accidentalClasses = {
            'tuner-note-stroke-half': ConfigService.getComponent('noteOutline'),
            'tuner-note-accidental': true
        };

        return html`
            <div class="tuner-note-container">
                <svg id="view" viewBox="0 2 100 100" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">

                    <use href="#note-letter" class=${classMap(noteClasses)}/>

                    ${ConfigService.getComponent('noteFill') ? svg`<use href="#liquid-effect" mask="url(#note-mask)"/>` : nothing}
                    ${ConfigService.getComponent('noteOctave') ? svg`<use href="#note-octave" class=${classMap(octaveClasses)}/>` : nothing}

                    <use href="#note-accidental" class=${classMap(accidentalClasses)}/>
                    <defs>
                        <!-- Define the text used in the scene -->
                        <text id="note-letter" x="50%" y="50%" dominant-baseline="central"
                              text-anchor="middle">
                            ${this.note.letter}
                        </text>
                        <text id="note-accidental" x="60%" y="35%" dominant-baseline="central"
                              text-anchor="middle">
                            ${this.note.accidental}
                        </text>
                        <text id="note-octave" x="60%" y="60%" dominant-baseline="central" text-anchor="middle">
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
                            <use href="#note-octave" class="tuner-note-accidental-mask"/>
                            <use href="#note-accidental" class="tuner-note-octave-mask"/>
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

