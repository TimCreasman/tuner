import {customElement} from 'lit/decorators.js';
import {css, html, LitElement} from 'lit';
import Fontawesome from './css/fontawesome';

const AccordionComponentStyles = css`
    details > summary {
        list-style: none;
        padding: 1em;

        display: flex;
        justify-content: space-between;
        align-items: center;
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

    details {
        border-radius: 1em;
        backdrop-filter: blur(25px);
        background-color: rgba(var(--primary-color), 0.3);
        color: rgb(var(--highlight-color));
        font-size: 2em;

        margin-block: 2rem;
        margin-inline: 9rem;
        padding-block-end: 0.1px;

        transition: all .2s var(--entrance-transition);
    }

    details:hover {
        scale: 1.1;
        background-color: rgba(var(--primary-color), 0.6);
    }

    details[open] {
        background-color: rgba(var(--primary-color), 0.6);
    }

    .content {
        padding-inline: 1em;
        padding-block-end: 1em;
        border-radius: 1em;
        color: rgb(var(--highlight-color));
    }
`;

@customElement('tn-accordion')
export class AccordionComponent extends LitElement {

    static styles = [AccordionComponentStyles, Fontawesome];

    protected render() {
        return html`
            <details>
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
