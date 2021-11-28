import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import template from './tuner.template';

@customElement('tn-tuner')
export class Tuner extends LitElement {

    render(){
        return template;
    }
}
