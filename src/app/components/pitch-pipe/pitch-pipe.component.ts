import { css, html, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import Fontawesome from '../../components/shared/css/fontawesome';
import { MathUtility } from '../../utilities/math-utility';
import { Note } from '../../utilities/note-utility';
import { CarouselComponent } from '../shared/carousel.component';

const PitchPipeComponentStyles = css`
    :host {
        display: flex;
        justify-content: center;
        align-items: center;
        --stroke-width: 20;
    }
    .pitch-pipe-gears {
        height: 100%;
        width: 100%;
        position: relative;
    }
    .center-text {
        text-anchor: middle;
        dominant-baseline: central;
    }
    .gear {
        font-family: var(--fa-style-family, "Font Awesome 6 Free");
        font-weight: var(--fa-style, 900);
        font-size: 50em;

        stroke-width: var(--stroke-width);
    }
    .gear-gradient {
        /* These percentages are a ratio of the view box size: 1 / (2 * (viewbox / 100))*/
        transform-origin: 0.0505% 0.0505%;
    }
    .stop-color-highlight {
        stop-color: rgb(var(--highlight-color));
    }
    .stop-color-background {
        stop-color: rgb(var(--background-color));
    }
    .stop-color-primary {
        stop-color: rgb(var(--primary-color));
    }

    .fill-primary-stroke-background {
        stroke: rgb(var(--background-color));
        fill: rgb(var(--primary-color));
    }
    .fill-background-stroke-primary {
        stroke: rgb(var(--primary-color));
        fill: rgb(var(--background-color));
    }

    .gear-note {
        font-size: 8em;
        stroke-width: calc(var(--stroke-width) / 2);
        stroke-linejoin: round;
        transition: font-size 0.3s var(--entrance-transition);
    }
    .gear-note-selected {
        font-size: 12em;
    }
    .gear-note-accidental {
        font-size: 4em;
        stroke-width: calc(var(--stroke-width) / 4);
    }
    .gear-note-accidental-selected {
        font-size: 8em;
    }
`;

@customElement('tn-pitch-pipe')
export class PitchPipeComponent extends LitElement {

    static styles = [Fontawesome, PitchPipeComponentStyles];

    private _pipeRotation = 0;
    private _pipeRotationVelocity = 0;
    private _pipeRotationOffset = 30;

    private _isUserInteracting = true;
    private _shouldUpdatePhysics = false;

    @property({ attribute: CarouselComponent.slideShownAttribute })
    isShown = false;

    set pipeRotation(value: number) {
        const oldValue = this.pipeRotation;
        this._pipeRotation = value % 360;
        this.pipeRotationVelocity = (this.pipeRotation - oldValue);
        this._currentNote = this._getCurrentNote();
        this.requestUpdate('pipeRotation', oldValue);
    }
    get pipeRotation(): number {
        return this._pipeRotation;
    }

    set pipeRotationVelocity(value: number) {
        if (this._pipeRotation != value) {
            this._shouldUpdatePhysics = true;
        }
        this._pipeRotationVelocity = value;
    }
    get pipeRotationVelocity(): number {
        return this._pipeRotationVelocity;
    }

    private _notes = [
        new Note(48),// C3
        new Note(49),
        new Note(50),
        new Note(51),
        new Note(52),
        new Note(53),
        new Note(54),
        new Note(55),
        new Note(56),
        new Note(57),
        new Note(58),
        new Note(59), // B3
    ];
    private _currentNote = this._notes[0];


    // Setup a simple physics sim for spinning the pipe
    private simulate = (): void => {
        if (!this._isUserInteracting && this._shouldUpdatePhysics && this.isShown) {
            
            this._shouldUpdatePhysics = false;
            if (this.pipeRotationVelocity < 0.1 && this.pipeRotationVelocity > -0.1) {
                this.pipeRotationVelocity = 0;
                const distanceToCenter = this.pipeRotation - Math.round(this.pipeRotation / 30) * 30;
                this.rotateToAngle(distanceToCenter);
            } else {
                // This deccelerates the wheel over time, it basically simulates friction
                const decceleration = this.pipeRotationVelocity > 0 ? -0.2 : 0.2;
                this.pipeRotationVelocity += decceleration;
                // only apply velocity if it is below a certain threshold
                this.pipeRotation += this.pipeRotationVelocity;
            }
        } 
        requestAnimationFrame(this.simulate);
    };

    connectedCallback() {
        super.connectedCallback();
        requestAnimationFrame(this.simulate);
    }

    private rotateToAngle(angle: number) {
        const dir = angle > 0 ? -1 : 1;
        const snapAcceleration = 0.2;
        const velocity = Math.sqrt(2 * snapAcceleration * Math.abs(angle));
        this.pipeRotationVelocity = velocity * dir;
    }

    // To support both mobile and pc, both touch and mouse events need to be implemented
    private _handleMouseMove(event: MouseEvent) {
        if (event.buttons > 0) {
            this._isUserInteracting = true;
            const isScreenRight = event.pageX > (window.innerWidth / 2);
            this._handleRotationStart(event.movementY, isScreenRight);
        }
    }
    private _handleMouseUp() {
        this._isUserInteracting = false;
    }

    private _previousTouch: Touch = null;
    private _handleTouchMove(event: TouchEvent) {
        this._isUserInteracting = true;
        const touch = event.touches[0];
        if (this._previousTouch) {
            const isScreenRight = touch.pageX > (window.innerWidth / 2);
            this._handleRotationStart(touch.pageY - this._previousTouch.pageY, isScreenRight);
        }
        this._previousTouch = touch;
    }
    private _handleTouchEnd() {
        this._previousTouch = null;
        this._isUserInteracting = false;
    }

    private _handleRotationStart(movementY: number, isScreenRight = true) {
        if (isScreenRight) {
            this.pipeRotation += movementY / 4;
        } else {
            this.pipeRotation -= movementY / 4;
        }
    }
    private _getCurrentNote(): Note {
        const angle = this.pipeRotation < 0 ? this.pipeRotation : this.pipeRotation - 360;
        const index = (MathUtility.round((Math.abs(angle)) / 30, 0)) % 12;
        return this._notes[index];
    }

    private _renderNotes() {
        return svg`
            ${this._notes.map((note, index) => {
                const noteAngle = this.pipeRotation + (30 * index);
                const noteClasses: {[key: string]: boolean} = {
                    'gear-note': true,
                    'center-text': true,
                    'gear-note-selected': this._currentNote.equals(note),
                    'fill-primary-stroke-background': this._currentNote.equals(note),
                    'fill-background-stroke-primary': !this._currentNote.equals(note),
                };
                const noteAccidentalClasses = structuredClone(noteClasses);
                noteAccidentalClasses['gear-note-accidental'] = true;
                noteAccidentalClasses['fill-primary-stroke-background'] = !this._currentNote.equals(note);
                noteAccidentalClasses['gear-note-accidental-selected'] = this._currentNote.equals(note);
                noteAccidentalClasses['fill-background-stroke-primary'] = this._currentNote.equals(note);
                return svg`
                    <text @click=${() => this.rotateToAngle(noteAngle)}
                        class="${classMap(noteClasses)}" x="0%" y="-33%"
                        transform="rotate(${noteAngle})">
                        ${note.letter}
                    </text>
                    <text class="${classMap(noteAccidentalClasses)}" x="4%" y="-37%"
                        transform="rotate(${noteAngle})">
                        ${note.accidental}
                    </text>
                `;
            })}
        `;
    }

    render() {
        return html`

            <div class="pitch-pipe-gears"
                @mouseup="${this._handleMouseUp}"
                @touchend="${this._handleTouchEnd}"
                @mousemove="${this._handleMouseMove}"
                @touchmove="${this._handleTouchMove}">
                <svg viewbox="0 0 1000 1000" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(500, 500)">
                        <text class="${classMap({'gear': true, 'background-gear': true, 'center-text': true })}" 
                              fill="url(#gradient-fill-background-gear)" 
                              stroke="url(#gradient-stroke-background-gear)"
                              transform="rotate(${this.pipeRotation - this._pipeRotationOffset})">
                            \uf013
                        </text>
                        <text class="${classMap({'gear': true, 'foreground-gear': true, 'center-text': true})}" 
                              fill="url(#gradient-fill-foreground-gear)" 
                              stroke="url(#gradient-stroke-foreground-gear)"
                              transform="rotate(${this.pipeRotation})">
                            \uf013
                        </text>
                        ${this._renderNotes()}
                    </g>
                    <defs>
                        <!-- gear fill gradients -->
                        <linearGradient id="gradient-fill-background-gear" 
                            class="gear-gradient"
                            gradientTransform="rotate(${-(this.pipeRotation - this._pipeRotationOffset) + 90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                        <linearGradient id="gradient-fill-foreground-gear" 
                            class="gear-gradient"
                            gradientTransform="rotate(${-this.pipeRotation + 90})">
                            <stop offset="50%" class="stop-color-background"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>

                        <!-- gear stroke gradients -->
                        <linearGradient id="gradient-stroke-background-gear"
                            class="${classMap({'gear-gradient': true})}"
                            gradientTransform="rotate(${-(this.pipeRotation - this._pipeRotationOffset) + 90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                        <linearGradient id="gradient-stroke-foreground-gear" 
                            class="${classMap({'gear-gradient': true})}"
                            gradientTransform="rotate(${(-this.pipeRotation) + 90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                    </defs>
                </svg>
                <tn-pitch-pipe-player .note="${this._currentNote}"></tn-pitch-pipe-player>
            </div>
        `;
    }
}
