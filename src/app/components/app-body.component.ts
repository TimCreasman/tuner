import { customElement, property } from 'lit/decorators.js';
import { css, html, LitElement, nothing, unsafeCSS } from 'lit';
import Fontawesome from '../components/shared/css/fontawesome';
import { ConfigService } from '../services/config.service';
import { ThemeEvent } from '../events/theme-event';
import { ColorUtility } from '../utilities/color-utility';
import ButtonStyles from '../components/shared/css/button-styles';
import { subscribe, subscribable } from '../events/event-bus';

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

        container-type: inline-size;
    }
    
    .floating-button {
        color: rgb(var(--highlight-color));
        font-size: clamp(1rem, 3cqi, 2rem);
        z-index: 2;
        position: absolute;
        margin: 0.5em;
        padding: 0.5em;

        width: clamp(3rem, 10cqi, 6rem);
        height: clamp(3rem, 10cqi, 6rem);
    }

    .settings-button {
        right: 0%;
    }

    .donation-button {
        left: 0%;
    }
`;

@customElement('tn-app')
@subscribable
export class AppBodyComponent extends LitElement {
    static styles = [AppBodyComponentStyles, Fontawesome, ButtonStyles];

    @property()
    showSettings = false;

    @property()
    showDonation = false;

    @subscribe('theme-change')
    private refreshTheme = (e: ThemeEvent) => {
        e.updatedColors.forEach((value, color) => {
            const rgbColor = ColorUtility.hexToRgb(value);
            this.style.setProperty('--' + color + '-color', `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`);
        });
    };

    @subscribe('config-change')
    private refresh = () => {
        this.requestUpdate();
    };

    connectedCallback() {
        super.connectedCallback();
        this.calculateDocumentHeight();

        const primaryColorRGB = ColorUtility.hexToRgb(ConfigService.getColor('primary'));
        const highlightColorRGB = ColorUtility.hexToRgb(ConfigService.getColor('highlight'));
        const backgroundColorRGB = ColorUtility.hexToRgb(ConfigService.getColor('background'));

        this.style.setProperty('--primary-color', `${primaryColorRGB.r}, ${primaryColorRGB.g}, ${primaryColorRGB.b}`);
        this.style.setProperty('--highlight-color', `${highlightColorRGB.r}, ${highlightColorRGB.g}, ${highlightColorRGB.b}`);
        this.style.setProperty('--background-color',`${backgroundColorRGB.r}, ${backgroundColorRGB.g}, ${backgroundColorRGB.b}`);

        // Set up refresh event
        // this.$themeChanged = EventBus.getInstance().register('theme-change', this.refreshTheme);
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


    private toggleSettings() {
        this.showDonation = false;
        this.showSettings = !this.showSettings;
    }

    private renderSettings() {
        return this.showSettings ? html`
            <tn-settings @settings-close="${this.toggleSettings}"></tn-settings>` : nothing;
    }

    private toggleDonation() {
        this.showSettings = false;
        this.showDonation = !this.showDonation;
    }

    private onDoubleClick() {
        if (!this.showSettings) {
            this.toggleSettings();
        }
    }

    private renderDonation() {
        return this.showDonation ? html`
            <tn-donation></tn-donation>` : nothing;
    }

    private renderButtonDonation() {
        if (!ConfigService.getComponent('donationButton')) {
            return nothing;
        }
        return html`
                <button class="floating-button donation-button" @click="${this.toggleDonation}" aria-label="Donation"><i
                        class="${this.showDonation ? 'far fa-circle-xmark' : 'fa fa-coffee'}"></i></button>
        `;
    }

    private renderButtonSettings() {
        if (!ConfigService.getComponent('settingsButton')) {
            return nothing;
        }
        return html`
                <button class="floating-button settings-button" @click="${this.toggleSettings}" aria-label="Settings"><i
                        class="${this.showSettings ? 'far fa-circle-xmark' : 'fa fa-gear'}"></i></button>
        `;
    }

    protected render() {
        return html`
            <div class="app-body" @dblclick="${this.onDoubleClick}">
                ${this.renderButtonDonation()}
                ${this.renderButtonSettings()}
                ${this.renderSettings()}
                ${this.renderDonation()}
                <div class="app-content">
                    <tn-carousel>
                        <tn-tuner></tn-tuner>
                        <tn-pitch-pipe></tn-pitch-pipe>
                    </tn-carousel>
                </div>
            </div>
        `;
    }
}

