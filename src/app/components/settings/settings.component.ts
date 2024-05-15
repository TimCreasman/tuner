import { customElement, state } from 'lit/decorators.js';
import { css, html, LitElement, nothing } from 'lit';
import Fontawesome from '../../utilities/fontawesome';
import { ConfigService } from '../../services/config.service';
import { AllowedColor, ThemeEvent } from '../../events/theme-event';

const SettingsComponentStyles = css`
    input {
        margin-inline-end: 1em;
    }

    /* The switch - the box around the slider */

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        margin-inline-end: 1em;
    }

    /* Hide default HTML checkbox */

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--background-color);
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: var(--highlight-color);
    }

    input:checked + .slider {
        background-color: var(--primary-color);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px var(--background-color);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */

    .slider.round {
        border-radius: 1em;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    /***** Chrome, Safari, Opera, and Edge Chromium *****/

    input[type="range"]::-webkit-slider-runnable-track {
        margin: 0;
        background: var(--background-color);
        height: 0.5rem;
    }

    /******** Firefox ********/

    input[type="range"]::-moz-range-track {
        background: var(--background-color);
        height: 0.5rem;
    }

    /***** Chrome, Safari, Opera, and Edge Chromium *****/

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        margin-top: -12px; /* Centers thumb on the track */
        background-color: var(--primary-color);
        height: 2rem;
        width: 1rem;
    }

    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
        width: 15rem;
    }

    input[type="text"] {
        border: none;
        background: var(--background-color);
        color: var(--highlight-color);
        align-self: stretch;
        border-radius: 1em;
        font-family: var(--font-family);
    }

    .row {
        display: flex;
        margin-block: 1em;
        margin-inline: 1em;
    }

    i {
        cursor: pointer;
    }

    .setting .content {
        padding: 1.5em;
        backdrop-filter: blur(25px);
        border-radius: 1em;
        background-color: rgba(0, 0, 0, 0.8);
        color: var(--highlight-color);
    }

    .setting > .header {
        padding-bottom: 1.5em;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */

    .color-row {
        align-items: center;
    }

    .color-row input {
        margin-inline: 1em;
    }

    .color-ball {
        display: inline-block;
        border-radius: 100%;
        width: 1.5em;
        height: 1.5em;
        -webkit-box-shadow: inset 0.3em -0.3em 0 0 rgba(0, 0, 0, 0.5);
        -moz-box-shadow: inset 0.3em -0.3em 0 0 rgba(0, 0, 0, 0.5);
        box-shadow: inset 0.3em -0.3em 0 0 rgba(0, 0, 0, 0.5);
    }

    .color-ball.primary {
        background-color: var(--primary-color);
    }

    .color-ball.highlight {
        background-color: var(--highlight-color);
    }

    .color-ball.background {
        background-color: var(--background-color);
    }

    .color-label {
        flex: 1;
    }
`;

@customElement('tn-settings')
export class SettingsComponent extends LitElement {

    static styles = [SettingsComponentStyles, Fontawesome];

    @state()
    private frequencyOfA = ConfigService.frequencyOfA;
    @state()
    private accidentalMode = ConfigService.accidentalMode;

    @state()
    private primaryColor = ConfigService.getColor('primary');
    @state()
    private highlightColor = ConfigService.getColor('highlight');
    @state()
    private backgroundColor = ConfigService.getColor('background');

    constructor() {
        super();
    }

    private resetFrequencyOfA() {
        this.frequencyOfA = ConfigService.defaultConfig.frequencyOfA;
        ConfigService.frequencyOfA = ConfigService.defaultConfig.frequencyOfA;
    }

    private updateAccidentalMode(inputEvent: InputEvent): void {
        const value = (<HTMLInputElement>inputEvent.target).checked === false ? 1 : 0;
        this.accidentalMode = value;
        ConfigService.accidentalMode = value;
    }

    private updateFrequencyOfA(inputEvent: InputEvent): void {
        const value = Number((<HTMLInputElement>inputEvent.target).value);
        this.frequencyOfA = value;
        ConfigService.frequencyOfA = value;
    }

    private updateColor(inputEvent: InputEvent, color: AllowedColor): void {
        const value = (<HTMLInputElement>inputEvent.target).value;
        ConfigService.setColor(color, value);
        this.updateLocalColor(color, value);
        this.dispatchEvent(new ThemeEvent(color, value));
    }

    private resetColor(color: AllowedColor) {
        ConfigService.setColor(color, ConfigService.defaultConfig[color]);
        this.updateLocalColor(color, ConfigService.defaultConfig[color]);
        this.dispatchEvent(new ThemeEvent(color, ConfigService.defaultConfig[color]));
    }

    private updateLocalColor(color: AllowedColor, value: string) {
        switch (color) {
            case 'primary':
                this.primaryColor = value;
                break;
            case 'background':
                this.backgroundColor = value;
                break;
            case 'highlight':
                this.highlightColor = value;
                break;
        }
    }

    protected render() {
        return html`
            <tn-modal>
                <div slot="header">Settings</div>
                <div slot="content">
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
                    <tn-accordion>
                        <div slot="header">Theme</div>
                        <div slot="content">
                            <div class="row color-row">
                                <div class="color-ball primary"></div>
                                <input id="primary-color" type="text" maxlength="7" size="7"
                                       .value="${this.primaryColor}"
                                       @input="${(e: InputEvent) => this.updateColor(e, 'primary')}">
                                <label for="primary-color" class="color-label">Primary</label>
                                ${this.primaryColor !== ConfigService.defaultConfig.primary ? html`
                                    <i class="fa fa-undo" @click=${() => this.resetColor('primary')}></i>` : nothing}
                            </div>
                            <div class="row color-row">
                                <div class="color-ball highlight"></div>
                                <input id="highlight-color" type="text" maxlength="7" size="7"
                                       .value="${this.highlightColor}"
                                       @input="${(e: InputEvent) => this.updateColor(e, 'highlight')}"
                                >
                                <label for="highlight-color" class="color-label">Highlight</label>
                                ${this.highlightColor !== ConfigService.defaultConfig.highlight ? html`
                                    <i class="fa fa-undo" @click=${() => this.resetColor('highlight')}></i>` : nothing}
                            </div>
                            <div class="row color-row">
                                <div class="color-ball background"></div>
                                <input id="background-color" type="text" maxlength="7" size="7"
                                       .value="${this.backgroundColor}"
                                       @input="${(e: InputEvent) => this.updateColor(e, 'background')}"
                                >
                                <label for="background-color" class="color-label">Background</label>
                                ${this.backgroundColor !== ConfigService.defaultConfig.background ? html`
                                    <i class="fa fa-undo" @click=${() => this.resetColor('background')}></i>` : nothing}
                            </div>
                        </div>
                    </tn-accordion>
                </div>
            </tn-modal>
        `;
    }
}
