import { customElement, html, LitElement, state } from 'lit-element';
import { SettingsComponentStyles } from './settings.component';
import Fontawesome from '../../utilities/fontawesome';
import { ConfigService } from '../../services/config.service';
import { AllowedAlgorithms } from '../../models/algorithm.model';

@customElement('tn-appearance-settings')
export class ExperimentalSettingsComponent extends LitElement {
    static styles = [SettingsComponentStyles, Fontawesome];

    // Experimental
    @state()
    private algorithm = ConfigService.algorithm;

    constructor() {
        super();
    }

    // private updateAppearance(inputEvent: InputEvent): void {}

    protected render() {
        return html`
                    <tn-accordion>
                        <div slot="header">Appearance</div>
                        <div slot="content">
                            <div class="row">

                            </div>
                        </div>
                    </tn-accordion>
        `;
    }
}
