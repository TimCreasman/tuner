import {customElement} from 'lit/decorators.js';
import {css, html, LitElement} from 'lit';

const AppBodyComponentStyles = css`
  :root {
    --doc-height: 100%;
  }

  .app-body {
    width: 100%;
    height: 100vh; /* fallback for Js load */
    height: var(--doc-height);
  }

  /* Create a square view centered */

  .app-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75vw;
    height: 75vw;
    max-height: 75vh;
    max-width: 75vh;
  }
`;

@customElement('tn-app')
export class AppBodyComponent extends LitElement {

    static styles = AppBodyComponentStyles;

    connectedCallback() {
        super.connectedCallback();
        this.calculateDocumentHeight();
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

    protected render() {
        return html`
            <div class="app-body">
                <div class="app-content">
                    <tn-tuner></tn-tuner>
                </div>
            </div>
        `;
    }
}
