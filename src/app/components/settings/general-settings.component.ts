import { customElement, html, LitElement, nothing, state } from 'lit-element';
import { SettingsComponentStyles } from './settings.component';
import Fontawesome from '../../components/shared/css/fontawesome';
import { ConfigService } from '../../services/config.service';
import { subscribable, subscribe } from '../../events/event-bus';

@customElement('tn-general-settings')
@subscribable
export class GeneralSettingsComponent extends LitElement {
    static styles = [SettingsComponentStyles, Fontawesome];

    @subscribe('config-change')
    private refresh = () => {
        this.requestUpdate();
    };

    constructor() {
        super();
    }

    private updateAccidentalMode(inputEvent: InputEvent): void {
        const value = (<HTMLInputElement>inputEvent.target).checked === false ? 1 : 0;
        ConfigService.accidentalMode = value;
    }

    private resetFrequencyOfA() {
        ConfigService.frequencyOfA = ConfigService.defaultConfig.frequencyOfA;
    }

    private updateFrequencyOfA(inputEvent: InputEvent): void {
        const value = Number((<HTMLInputElement>inputEvent.target).value);
        ConfigService.frequencyOfA = value;
    }
 
    protected render() {
        return html`
                <tn-accordion >
                    <div slot="header">General</div>
                    <div slot="content">
                        <div class="row">
                            <label for="flats" class="switch">
                                <input id="flats"
                                       type="checkbox"
                                       .checked="${(ConfigService.accidentalMode === 0)}"
                                       @click=${this.updateAccidentalMode}>
                                <span class="slider round"></span>
                            </label>
                            <span>Use Flats</span>
                        </div>
                        <div class="row">
                            <input id="frequencyOfA"
                                   type="range"
                                   max="${ConfigService.AUpperBoundFreq}"
                                   min="${ConfigService.ALowerBoundFreq}"
                                   .value="${ConfigService.frequencyOfA}"
                                   @input=${this.updateFrequencyOfA}>
                            <label style="flex: 1" for="frequencyOfA">
                                A = ${ConfigService.frequencyOfA}HZ
                            </label>
                            ${ConfigService.frequencyOfA !== ConfigService.defaultConfig.frequencyOfA ? html`
                                <i class="fa fa-undo" @click=${(this.resetFrequencyOfA)}></i>` : nothing}
                        </div>
                    </div>
                </tn-accordion>
    `;
    }

}
