import { css, html, LitElement, svg } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import Fontawesome from '../../components/shared/css/fontawesome';
import { MathUtility } from '../../utilities/math-utility';
import { Note } from '../../utilities/note-utility';
import ButtonStyles from '../../components/shared/css/button-styles';

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
        dominant-baseline: middle;
        /* The gear shape is not perfectly square, so I account for that here */
        transform-origin: 50% 45%;
    }
    .gear {
        font-family: var(--fa-style-family, "Font Awesome 6 Free");
        font-weight: var(--fa-style, 900);
        font-size: 45em;

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
    .transition-transform {
        transition: all .3s var(--entrance-transition);
    }

    .gear-note {
        font-size: 8em;
        stroke: rgb(var(--primary-color));
        fill: rgb(var(--background-color));
        stroke-width: calc(var(--stroke-width) / 2);
        stroke-linejoin: round;
    }
    .gear-note-accidental {
        font-size: 4em;
        stroke-width: calc(var(--stroke-width) / 4);
        fill-rule: nonzero;
    }

    .play-note-button-container {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        pointer-events: none;
    }

    .play-note-button {
        pointer-events: auto;
        width: 7.75ch;
        height: 7.75ch;
        border-radius: 50%;
        margin-top: 35%;
        color: rgb(var(--highlight-color));
    }
`;

@customElement('tn-pitch-pipe')
export class PitchPipeComponent extends LitElement {

    static styles = [Fontawesome, PitchPipeComponentStyles, ButtonStyles];

    @state()
    pipeRotation = 0;

    private _transitionTransform = false;
    private _pipeRotationOffset = 30;
    private _notes = [
        new Note(60),
        new Note(61),
        new Note(62),
        new Note(63),
        new Note(64),
        new Note(65),
        new Note(66),
        new Note(67),
        new Note(68),
        new Note(69),
        new Note(70),
        new Note(71),
    ];

    connectedCallback() {
        super.connectedCallback();
    }

    // To support both mobile and pc, both touch and mouse events need to be implemented

    private _handleMouseMove(event: MouseEvent) {
        if (event.buttons > 0) {
            this._handleRotationStart(event.movementY);
        }
    }
    private _handleMouseUp(event: MouseEvent) {
        this._handleRotationStop();
    }

    private _previousTouch: Touch = null;
    private _handleTouchMove(event: TouchEvent) {
        const touch = event.touches[0];
        if (this._previousTouch) {
            this._handleRotationStart(touch.pageY - this._previousTouch.pageY);
        }
        this._previousTouch = touch;
    }
    private _handleTouchEnd(event: TouchEvent) {
        this._previousTouch = null;
        this._handleRotationStop();
    }

    private _handleRotationStart(movementY: number) {
        // stop transition animation
        this._transitionTransform = false;
        this.pipeRotation = (this.pipeRotation + movementY) % 360;
    }
    private _handleRotationStop() {
        // start transition animation
        this._transitionTransform = true;
        this.pipeRotation = MathUtility.round((this.pipeRotation / 30), 0) * 30;
    }

    private _renderNotes() {
        const _rotateToAngle = (angle: number) => {
            // difference between dest angle and current angle
            if (Math.abs(angle) >= 180) {
                angle += 360;
            }
            this.pipeRotation = angle % 360;
        };
        return svg`
            ${this._notes.map((note, index) => {
                const noteAngle = this.pipeRotation + (30 * index);
                
                return svg`
                    <text @click=${() => _rotateToAngle(this.pipeRotation - noteAngle)}
                        class="${classMap({'gear-note': true, 'center-text': true, 'transition-transform': this._transitionTransform})}" x="50%" y="15%"
                        transform="rotate(${this.pipeRotation + (30 * index)})">
                        ${note.letter}
                    </text>
                    <text class="${classMap({'gear-note': true, 'center-text': true, 'gear-note-accidental': true, 'transition-transform': this._transitionTransform})}" x="54%" y="11%"
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
                    <text class="${classMap({'gear': true, 'background-gear': true, 'center-text': true, 'transition-transform': this._transitionTransform})}" 
                          fill="url(#gradient-fill-background-gear)" 
                          stroke="url(#gradient-stroke-background-gear)"
                          transform="rotate(${this.pipeRotation - this._pipeRotationOffset})"
                          x="50%" y="50%">
                        \uf013
                    </text>
                    <text class="${classMap({'gear': true, 'foreground-gear': true, 'center-text': true, 'transition-transform': this._transitionTransform})}" 
                          fill="url(#gradient-fill-foreground-gear)" 
                          stroke="url(#gradient-stroke-foreground-gear)"
                          transform="rotate(${this.pipeRotation})"
                          x="50%" y="50%">
                        \uf013
                    </text>
                    ${this._renderNotes()}
                    <!-- <text class="center-text play-note-button" x="50%" y="46.5%"> -->
                    <!--     \uf144 -->
                    <!-- </text> -->
                    <defs>
                        <!-- gear fill gradients -->
                        <linearGradient id="gradient-fill-background-gear" 
                            class="${classMap({'gear-gradient': true, 'transition-transform': this._transitionTransform})}"
                            gradientTransform="rotate(${-(this.pipeRotation - this._pipeRotationOffset) + 90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                        <linearGradient id="gradient-fill-foreground-gear" 
                            class="${classMap({'gear-gradient': true, 'transition-transform': this._transitionTransform})}"
                            gradientTransform="rotate(${-this.pipeRotation + 90})">
                            <stop offset="50%" class="stop-color-background"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>

                        <!-- gear stroke gradients -->
                        <linearGradient id="gradient-stroke-background-gear"
                            class="${classMap({'gear-gradient': true, 'transition-transform': this._transitionTransform})}"
                            gradientTransform="rotate(${-(this.pipeRotation - this._pipeRotationOffset) + 90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                        <linearGradient id="gradient-stroke-foreground-gear" 
                            class="${classMap({'gear-gradient': true, 'transition-transform': this._transitionTransform})}"
                            gradientTransform="rotate(${(-this.pipeRotation) + 90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                    </defs>
                </svg>
                <div class="play-note-button-container">
                    <button class="play-note-button"><i class="fa fa-circle-play"></i></button>
                </div>
            </div>
        `;
    }
}
