import {customElement} from 'lit/decorators.js';
import {css, html, LitElement} from 'lit';

const SettingsComponentStyles = css`
    .modal {
        width: 110%;
        height: 110%;
        right: -5%;
        top: -5%;
        position: absolute;
        z-index: 1;
        backdrop-filter: blur(3em);
        overflow-y: scroll;

        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }

    .scroll-shadow {
        width: 110%;
        height: 111%;
        right: -5%;
        top: -5%;
        position: absolute;
        z-index: 1;
        box-shadow: inset 0 0 0 2em var(--background-color);
        pointer-events: none;
    }

    .header {
        font-size: 3em;
    }

    .row {
        display: flex;
        margin-block: 1em;
        margin-inline: 1em;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */

    .modal::-webkit-scrollbar {
        display: none;
    }
`;

@customElement('tn-modal')
export class SettingsComponent extends LitElement {

    static styles = [SettingsComponentStyles];

    protected render() {
        return html`
            <div class="modal">
                <slot class="header row" name="header"></slot>
                <slot name="content"></slot>
            </div>
            <div class="scroll-shadow"></div>
        `;
    }
}
