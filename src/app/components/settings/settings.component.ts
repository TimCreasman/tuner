import { customElement } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';
import Fontawesome from '../../utilities/fontawesome';

export const SettingsComponentStyles = css`
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

    select {
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

    .row input, select {
        font-size: 0.75em;
        margin-inline: 1em;
        padding-inline: 1em;
    }
`;

@customElement('tn-settings')
export class SettingsComponent extends LitElement {

    static styles = [SettingsComponentStyles, Fontawesome];

    constructor() {
        super();
    }

    protected render() {
        return html`
            <tn-modal>
                <div slot="header">Settings</div>
                <div slot="content">
                    <tn-general-settings></tn-general-settings>
                    <tn-theme-settings></tn-theme-settings>
                    <tn-experimental-settings></tn-experimental-settings>
                </div>
            </tn-modal>
        `;
    }
}
