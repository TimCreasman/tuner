import { customElement, html, LitElement, nothing, state } from 'lit-element';
import { SettingsComponentStyles } from './settings.component';
import Fontawesome from '../../components/shared/css/fontawesome';
import { ConfigService } from '../../services/config.service';

@customElement('tn-general-settings')
export class GeneralSettingsComponent extends LitElement {
    static styles = [SettingsComponentStyles, Fontawesome];

    @state()
    private frequencyOfA = ConfigService.frequencyOfA;
    @state()
    private accidentalMode = ConfigService.accidentalMode;

    constructor() {
        super();
    }

    private updateAccidentalMode(inputEvent: InputEvent): void {
        const value = (<HTMLInputElement>inputEvent.target).checked === false ? 1 : 0;
        this.accidentalMode = value;
        ConfigService.accidentalMode = value;
    }

    private resetFrequencyOfA() {
        this.frequencyOfA = ConfigService.defaultConfig.frequencyOfA;
        ConfigService.frequencyOfA = ConfigService.defaultConfig.frequencyOfA;
    }

    private updateFrequencyOfA(inputEvent: InputEvent): void {
        const value = Number((<HTMLInputElement>inputEvent.target).value);
        this.frequencyOfA = value;
        ConfigService.frequencyOfA = value;
    }

    protected render() {
        return html`
                <tn-accordion>
                    <div slot="header">General</div>
                    <div slot="content">
                        <div class="row">
                            <label for="flats" class="switch">
                                <input id="flats"
                                       type="checkbox"
                                       .checked="${(this.accidentalMode === 0)}"
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
                                   .value="${this.frequencyOfA}"
                                   @input=${this.updateFrequencyOfA}>
                            <label style="flex: 1" for="frequencyOfA">
                                A = ${this.frequencyOfA}HZ
                            </label>
                            ${this.frequencyOfA !== ConfigService.defaultConfig.frequencyOfA ? html`
                                <i class="fa fa-undo" @click=${(this.resetFrequencyOfA)}></i>` : nothing}
                        </div>
                    </div>
                </tn-accordion>
    `;
    }

}
