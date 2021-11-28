import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('tn-tuner')
export class Tuner extends LitElement {

    // constructor() {
    //     super();
    //     this.innerHTML = 'hello';
    // }

    render(){
        return html`
            <p>hello from tuner</p>
        `
    }
}
