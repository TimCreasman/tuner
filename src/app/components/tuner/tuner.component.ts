import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('tn-tuner')
export class TunerComponent extends LitElement {

    render(){
        return html`
            <tn-tuner-note></tn-tuner-note>
            <tn-tuner-ring></tn-tuner-ring>
        `;
    }
}
