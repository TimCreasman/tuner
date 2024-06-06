import { customElement, html, LitElement, state } from 'lit-element';
import { SettingsComponentStyles } from './settings.component';
import Fontawesome from '../../components/shared/css/fontawesome';
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
                                <select @input="${this.updateAlgorithm}">
                                    ${AllowedAlgorithms.map(option => html`
                                        <option .selected="${option === this.algorithm}" .value="${option}">${option}</option>
                                    `)}
                                </select>
                            </div>
                        </div>
                    </tn-accordion>
        `;
    }
}
