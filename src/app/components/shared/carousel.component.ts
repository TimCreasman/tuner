import {customElement, property, queryAssignedNodes} from 'lit/decorators.js';
import {css, html, LitElement} from 'lit';
import Fontawesome from './css/fontawesome';
import KeenSliderCSS from './css/keen-slider-css';
import {KeenSliderInstance}  from 'keen-slider';
import KeenSlider from 'keen-slider';

const CarouselComponentStyles = css`
`;

@customElement('tn-carousel')
export class CarouselComponent extends LitElement {

    static styles = [CarouselComponentStyles, Fontawesome, KeenSliderCSS];

    @property({ type: Number }) carouselIndex = 0;

    private slider: KeenSliderInstance = null;

    firstUpdated() {
        const wrapper = this.shadowRoot.getElementById('slider');
        this.slider = new KeenSlider(wrapper);
    }

    disconnectedCallback() {
        this.slider.destroy();
    }

    protected render() {
        return html`
            <div id="slider" class="keen-slider">
                <div class="keen-slider__slide">Test 1</div>
                <div class="keen-slider__slide">Test 2</div>
                <div class="keen-slider__slide">Test 3</div>
            </div>
        `;
    }
}
