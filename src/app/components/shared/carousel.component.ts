import { customElement, state } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';
import Fontawesome from './css/fontawesome';
import KeenSliderCSS from './css/keen-slider-css';
import { KeenSliderInstance, TrackDetails } from 'keen-slider';
import KeenSlider from 'keen-slider';

const CarouselComponentStyles = css`
    .track-container {
        margin-block-start: -5%;
        display: flex;
        justify-content: center;
    }

    .track-ball {
        display: inline-block;
        border: solid 0.3em rgb(var(--primary-color));
        border-radius: 100%;
        width: 1em;
        height: 1em;
        margin-inline: 0.2em;
        transition: all .2s var(--entrance-transition);
    }

    .active {
        background-color: rgb(var(--primary-color));
    }
`;

@customElement('tn-carousel')
export class CarouselComponent extends LitElement {

    static styles = [CarouselComponentStyles, Fontawesome, KeenSliderCSS];

    private slider: KeenSliderInstance = null;
    private sliderWrapper: HTMLElement = null;

    @state()
    private _trackDetails: TrackDetails = null;

    firstUpdated() {
        this.sliderWrapper = this.shadowRoot.getElementById('slider');
        this.slider = new KeenSlider(this.sliderWrapper, {
            loop: true
        });
    }

    disconnectedCallback() {
        this.slider.destroy();
    }

    /**
    * Wraps each node with the keen-slider class
    **/
    handleSlotchange(e: any) {
        const childElements: HTMLElement[] = e.target.assignedElements({ flatten: true });

        for (const element of childElements) {
            element.className = 'keen-slider__slide';
            this.sliderWrapper.appendChild(element);
        }

        this.slider.update();
        this._trackDetails = this.slider?.track?.details;
        this.slider.on('slideChanged', () => {
            this._trackDetails = this.slider?.track?.details;
        });
    }

    protected render() {
        return html`
            <div id="slider" class="keen-slider">
               <slot @slotchange=${this.handleSlotchange}></slot>
            </div>
            <div class="track-container">
                <div>
                    ${this._trackDetails?.slides.map((slide, index) => {
                       return html`<div class="track-ball ${this._trackDetails.rel === index ? 'active' : ''}"></div>`;
                    })}
                </div>
            </div>
        `;
    }
}
