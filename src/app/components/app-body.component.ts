import { customElement, property } from 'lit/decorators.js';
import { css, html, LitElement, nothing, unsafeCSS } from 'lit';
import Fontawesome from '../utilities/fontawesome';
import { ConfigService } from '../services/config.service';
import { ThemeEvent } from '../events/theme-event';
import { ColorUtility } from '../utilities/color-utility';

const AppBodyComponentStyles = css`
    :root {
        --doc-height: 100%;
    }

    :host {
        // Necessary for using the theme on load
        --primary-color: ${unsafeCSS(ConfigService.defaultConfig.primary)};
        --background-color: ${unsafeCSS(ConfigService.defaultConfig.background)};
        --highlight-color: ${unsafeCSS(ConfigService.defaultConfig.highlight)};
        --font-family: "Archivo Black", sans-serif;

        // Set some defaults
        background-color: rgb(var(--background-color));
        color: rgb(var(--primary-color));
        font-family: var(--font-family);
    }

    .app-body {
        width: 100%;
        height: 100vh; /* fallback for Js load */
        height: var(--doc-height);
        background-color: rgb(var(--background-color, black));
    }

    /* Create a square view centered */

    .app-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
        height: 90vw;
        max-height: 90vh;
        max-width: 90vh;
    }
    
    .floating-button {
        color: rgb(var(--highlight-color));
        font-size: 3em;
        z-index: 2;
        position: absolute;
    }

    .settings-button {
        right: 0%;
    }

    .settings-button:hover {
        -webkit-animation: fa-spin 1.7s infinite linear;
        -moz-animation: fa-spin 1.7s infinite linear;
        -o-animation: fa-spin 1.7s infinite linear;
        animation: fa-spin 1.7s infinite linear;
    }

    .donation-button {
        left: 0%;
    }

    .donation-button:hover {
        -webkit-animation: fa-shake 1s infinite linear;
        -moz-animation: fa-shake 1s infinite linear;
        -o-animation: fa-shake 1s infinite linear;
        animation: fa-shake 1s infinite linear;
    }
`;

@customElement('tn-app')
export class AppBodyComponent extends LitElement {
    static styles = [AppBodyComponentStyles, Fontawesome];

    @property()
    showSettings = false;

    @property()
    showDonation = false;

    connectedCallback() {
        super.connectedCallback();
        this.calculateDocumentHeight();

        const primaryColorRGB = ColorUtility.hexToRgb(ConfigService.getColor('primary'));
        const highlightColorRGB = ColorUtility.hexToRgb(ConfigService.getColor('highlight'));
        const backgroundColorRGB = ColorUtility.hexToRgb(ConfigService.getColor('background'));

        this.style.setProperty('--primary-color', `${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}`);
        this.style.setProperty('--highlight-color', `${highlightColorRGB.r}, ${highlightColorRGB.g}, ${highlightColorRGB.b}`);
        this.style.setProperty('--background-color',`${backgroundColorRGB.r}, ${backgroundColorRGB.g}, ${backgroundColorRGB.b}`);
    }

    /**
     * Calculates the height of the document. We have to use this method as the vh css units are unreliable on mobile devices.
     * @private
     */
    private calculateDocumentHeight(): void {
        const documentHeight = () => {
            const doc = document.documentElement;
            doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
        };
        window.addEventListener('resize', documentHeight);
        documentHeight();
    }

    private refreshTheme(e: ThemeEvent) {
        const color = ColorUtility.hexToRgb(e.value);
        this.style.setProperty('--' + e.color + '-color', `${color.r}, ${color.g}, ${color.b}`);
    }

    private toggleSettings() {
        this.showDonation = false;
        this.showSettings = !this.showSettings;
    }

    private renderSettings() {
        return this.showSettings ? html`
            <tn-settings @theme-changed="${this.refreshTheme}"></tn-settings>` : nothing;
    }

    private toggleDonation() {
        this.showSettings = false;
        this.showDonation = !this.showDonation;
    }

    private renderDonation() {
        return this.showDonation ? html`
            <tn-donation></tn-donation>` : nothing;
    }

    protected render() {
        return html`
            <div class="app-body">
                <div class="app-content">
                    <div class="floating-button settings-button" @click="${this.toggleSettings}"><i
                            class="${this.showSettings ? 'far fa-circle-xmark' : 'fa fa-gear'}"></i></div>
                    <div class="floating-button donation-button" @click="${this.toggleDonation}"><i
                            class="${this.showDonation ? 'far fa-circle-xmark' : 'fa fa-coffee'}"></i></div>
                    <tn-tuner></tn-tuner>
                    ${this.renderSettings()}
                    ${this.renderDonation()}
                </div>
            </div>
        `;
    }
}
