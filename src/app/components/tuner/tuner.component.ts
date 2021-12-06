import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('tn-tuner')
export class TunerComponent extends LitElement {

    render() {
        return html`
            <tn-tuner-note></tn-tuner-note>
            <tn-tuner-ring></tn-tuner-ring>
        `;
    }
}
