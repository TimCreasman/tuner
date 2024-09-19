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
    
    // property applied by the carousel when a slide is shown to the user
    public static slideShownAttribute = 'carousel-slide-shown';

    private slider: KeenSliderInstance = null;
    private sliderWrapper: HTMLElement = null;

    @state()
    private _trackDetails: TrackDetails = null;

    firstUpdated() {
        this.sliderWrapper = this.shadowRoot.getElementById('slider');
        this.slider = new KeenSlider(this.sliderWrapper, { loop: true });
    }

    disconnectedCallback() {
        this.slider.destroy();
    }

    /**
    * Wraps each node with the keen-slider class
    **/
    handleSlotchange(e: Event) {
        const childElements: Element[] = (e.target as HTMLSlotElement).assignedElements({ flatten: true });

        childElements.forEach((element: Element) => {
            element.className = 'keen-slider__slide';
            this.sliderWrapper.appendChild(element);
        });

        this.slider.update();
        this._trackDetails = this.slider?.track?.details;
        this.slider.on('slideChanged', () => {
            childElements.forEach((element: Element, index: number) => {
                element.setAttribute(CarouselComponent.slideShownAttribute, (this.slider?.track?.details?.rel === index).toString());
            });
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
                    ${this._trackDetails?.slides.map((_, index) => {
                       return html`<div class="track-ball ${this._trackDetails.rel === index ? 'active' : ''}"></div>`;
                    })}
                </div>
            </div>
        `;
    }
}
