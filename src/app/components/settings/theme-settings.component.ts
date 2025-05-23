import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit-element';
import { ConfigService } from '../../services/config.service';
import Fontawesome from '../../components/shared/css/fontawesome';
import { SettingsComponentStyles } from './settings.component';
import { subscribe, subscribable } from '../../events/event-bus';
import { Theme, ThemeColor, ThemesList } from '../../constants/themes';

const ThemeSettingComponentStyles = css`
    .color-row {
        align-items: center;
        justify-content: space-between;
    }

    .row input, select {
        margin-inline: 1em;
    }

    .color-ball {
        display: inline-block;
        border-radius: 100%;
        width: 1em;
        height: 1em;
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

    .theme-container {
        height: 10em;
        overflow-y: scroll;
    }

    .d-inline {
        display: inline-block;
    }

    .theme-name {
        margin-inline-end: 1em;
    }

    .palette {
        display: flex;
        width: 50%;
        gap: 0.5em;
        border-radius: 1em;
        padding: 0.3em;
    }
`;

@customElement('tn-theme-settings')
@subscribable
export class ThemeSettingsComponent extends LitElement {

    static styles = [ThemeSettingComponentStyles, SettingsComponentStyles, Fontawesome];

    @subscribe('theme-change')
    private onThemeChange = () => {
        this.requestUpdate();
    };

    constructor() {
        super();
    }

    private updateTheme(theme: Theme): void {
        ConfigService.setTheme(theme);
    }

    protected render() {
        return html`
            <tn-accordion>
                <div slot="header">Theme</div>
                <div slot="content">
                    <div class="theme-container">
                        ${ThemesList.map(theme => {
                        return html`
                            <div class="row color-row" @click=${() => this.updateTheme(theme)}>
                                <span class="d-inline theme-name">${theme.name}</span>
                                <span class="palette" style="background: ${theme.background}"> 
                                    <span class="color-ball" style="background: ${theme.primary}"></span>
                                    <span class="color-ball" style="background: ${theme.highlight}"></span>
                                    <span class="color-ball" style="background: ${theme.text}"></span>
                                </span>
                            </div>
                        `;
                        })}
                    </div>
            </tn-accordion>
        `;
    }
}
