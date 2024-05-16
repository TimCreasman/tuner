import {customElement, property} from 'lit/decorators.js';
import {css, html, LitElement, nothing, unsafeCSS} from 'lit';
import Fontawesome from '../utilities/fontawesome';
import {ConfigService, ThemeEvent} from '../services/config.service';

const AppBodyComponentStyles = css`
    :root {
        --doc-height: 100%;
    }

    :host {
        --primary-color: ${unsafeCSS(ConfigService.defaultConfig.primary)};
        --background-color: ${unsafeCSS(ConfigService.defaultConfig.background)};
        --highlight-color: ${unsafeCSS(ConfigService.defaultConfig.highlight)};
        --font-family: "Archivo Black", sans-serif;

        // Set some defaults
        background-color: var(--background-color, black);
        color: var(--primary-color, orange);
        font-family: var(--font-family);
    }

    .app-body {
        width: 100%;
        height: 100vh; /* fallback for Js load */
        height: var(--doc-height);
        background-color: var(--background-color, black);
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

    .icon {
        z-index: 2;
        position: absolute;
        right: 0%;
        top: 0%;
        color: var(--highlight-color);
        font-size: 3em;
    }
`;

@customElement('tn-app')
export class AppBodyComponent extends LitElement {
    static styles = [AppBodyComponentStyles, Fontawesome];

    @property()
    showSettings = false;

    connectedCallback() {
        super.connectedCallback();
        this.calculateDocumentHeight();

        this.style.setProperty('--primary-color', ConfigService.getColor('primary'));
        this.style.setProperty('--highlight-color', ConfigService.getColor('highlight'));
        this.style.setProperty('--background-color', ConfigService.getColor('background'));
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
        this.style.setProperty('--' + e.color + '-color', e.value);
    }

    private toggleSettings() {
        this.showSettings = !this.showSettings;
    }

    private renderSettings() {
        return this.showSettings ? html`
            <tn-settings @theme-changed="${this.refreshTheme}"></tn-settings>` : nothing;
    }

    protected render() {
        return html`
            <div class="app-body">
                <div class="app-content">
                    <div class="icon" @click="${this.toggleSettings}"><i
                            class="${this.showSettings ? 'far fa-circle-xmark' : 'fa fa-gear'}"></i></div>
                    <tn-tuner></tn-tuner>
                    ${this.renderSettings()}
                </div>
            </div>
        `;
    }
}
