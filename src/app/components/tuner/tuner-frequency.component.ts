import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ConfigService } from '../../services/config.service';
const TunerFrequencyComponentStyles = css`
    :host {
        width: 100cqw;
        top: 72%;
        position: absolute;
        display: grid;
        justify-items: center;
        color: rgb(var(--highlight-color));
        container-type: inline-size;
    }
    .container {
        font-size: 5cqi;
    }
    .hertz {
        margin-inline-start: 0.5em;
        font-size: 0.8em;
        color: rgb(var(--primary-color));
    }
`;

@customElement('tn-tuner-frequency')
export class TunerFrequencyComponent extends LitElement {

    static styles = TunerFrequencyComponentStyles;

    @property()
    frequency = 0;

    render() {
        return ConfigService.getComponent('frequencyText') ? html`<div class="container">${this.frequency}<span class="hertz">Hz</span></div>` : nothing;
    }
}
