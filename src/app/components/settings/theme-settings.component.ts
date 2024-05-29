import { css, html, LitElement, nothing } from 'lit';
import { customElement, state } from 'lit-element';
import { ThemeColor, ThemeEvent } from '../../events/theme-event';
import { ConfigService } from '../../services/config.service';
import Fontawesome from '../../components/shared/css/fontawesome';
import { SettingsComponentStyles } from './settings.component';

const ThemeSettingComponentStyles = css`
    .color-row {
        align-items: center;
    }

    .row input, select {
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
        background-color: rgb(var(--primary-color));
    }

    .color-ball.highlight {
        background-color: rgb(var(--highlight-color));
    }

    .color-ball.background {
        background-color: rgb(var(--background-color));
    }

    .color-label {
        flex: 1;
    }
`;

@customElement('tn-theme-settings')
export class ThemeSettingsComponent extends LitElement {

    static styles = [ThemeSettingComponentStyles, SettingsComponentStyles, Fontawesome];

    // Theme
    @state()
    private primaryColor = ConfigService.getColor('primary');
    @state()
    private highlightColor = ConfigService.getColor('highlight');
    @state()
    private backgroundColor = ConfigService.getColor('background');

    constructor() {
        super();
    }

    private updateColor(inputEvent: InputEvent, color: ThemeColor): void {
        const value = (<HTMLInputElement>inputEvent.target).value;
        ConfigService.setColor(color, value);
        this.updateLocalColor(color, value);
        this.dispatchEvent(new ThemeEvent(color, value));
    }

    private resetColor(color: ThemeColor) {
        ConfigService.setColor(color, ConfigService.defaultConfig[color]);
        this.updateLocalColor(color, ConfigService.defaultConfig[color]);
        this.dispatchEvent(new ThemeEvent(color, ConfigService.defaultConfig[color]));
    }

    private updateLocalColor(color: ThemeColor, value: string) {
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
        `;
    }
}
