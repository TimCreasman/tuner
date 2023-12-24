import {customElement} from 'lit/decorators.js';
import {css, html, LitElement} from 'lit';
import Fontawesome from '../../utilities/fontawesome';

const AccordionComponentStyles = css`
    details > summary {
        list-style: none;
        padding: 1em;
    }

    summary::-webkit-details-marker {
        display: none
    }

    summary::marker {
        content: none;
    }

    summary::after {
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
        content: "\\f107";
    }

    details[open] summary:after {
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
        content: "\\f106";
    }

    .accordion {
        border-radius: 1em;
        backdrop-filter: blur(25px);
        background-color: rgba(255, 255, 255, 0.3);
        color: var(--highlight-color);
        font-size: 2em;

        margin-block: 1em;
        margin-inline: 1em;
        padding-block-end: 0.1px;
    }

    .content {
        padding-inline: 1em;
        padding-block-end: 1em;
        border-radius: 1em;
        color: var(--highlight-color);
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .icon {
        margin-left: auto;
    }
`;

@customElement('tn-accordion')
export class AccordionComponent extends LitElement {

    static styles = [AccordionComponentStyles, Fontawesome];

    protected render() {
        return html`
            <details class="accordion" open>
                <summary class="header">
                    <slot name="header"></slot>
                </summary>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </details>
        `;
    }
}
