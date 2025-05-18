import { customElement, html, LitElement, state } from 'lit-element';
import { SettingsComponentStyles } from './settings.component';
import Fontawesome from '../../components/shared/css/fontawesome';
import { ConfigService } from '../../services/config.service';
import { AllowedAlgorithms } from '../../models/algorithm.model';
import { subscribable, subscribe } from '../../events/event-bus';

@customElement('tn-experimental-settings')
@subscribable
export class ExperimentalSettingsComponent extends LitElement {
    static styles = [SettingsComponentStyles, Fontawesome];

    @subscribe('config-change')
    private refresh = () => {
        this.requestUpdate();
    };

    constructor() {
        super();
    }

    private updateAlgorithm(inputEvent: InputEvent): void {
        const value = (<HTMLSelectElement>inputEvent.target).value;
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
                                        <option .selected="${option === ConfigService.algorithm}" .value="${option}">${option}</option>
                                    `)}
                                </select>
                            </div>
                        </div>
                    </tn-accordion>
        `;
    }
}
