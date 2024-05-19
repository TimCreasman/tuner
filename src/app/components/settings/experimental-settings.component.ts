import { customElement, html, LitElement } from 'lit-element';
import { SettingsComponentStyles } from './settings.component';
import Fontawesome from '../../utilities/fontawesome';
import { state } from 'lit/decorators';
import { ConfigService } from '../../services/config.service';
import { AllowedAlgorithms } from '../../models/algorithm.model';

@customElement('tn-experimental-settings')
export class ExperimentalSettingsComponent extends LitElement {
    static styles = [SettingsComponentStyles, Fontawesome];

    // Experimental
    @state()
    private algorithm = ConfigService.algorithm;

    constructor() {
        super();
    }

    private updateAlgorithm(inputEvent: InputEvent): void {
        const value = (<HTMLSelectElement>inputEvent.target).value;
        this.algorithm = value;
        ConfigService.algorithm = value;
    }

    protected render() {
        return html`
                    <tn-accordion>
                        <div slot="header">Experimental</div>
                        <div slot="content">
                            <div class="row">
                                <label>Pitch Detection Algorithm</label>
                                <select .value=${this.algorithm} @input="${this.updateAlgorithm}">
                                    ${AllowedAlgorithms.map(option => html`
                                        <option .value="${option}">${option}</option>
                                    `)}
                                </select>
                            </div>
                        </div>
                    </tn-accordion>
        `;
    }
}
