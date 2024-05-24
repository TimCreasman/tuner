import { customElement } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';
import Fontawesome from '../../utilities/fontawesome';
import FontawesomeBrands from '../../utilities/fontawesome-brands';

export const DonationComponentStyles = css`

    .donation-container{
        display:flex;
        flex-direction: column;
        height: 50vh;

        margin: 2em;
        padding: 4em;
        color: rgb(var(--highlight-color));

        height: 30vw;
        container-type: inline-size;
    }

    .donation-button {
        margin: 1em;
        padding: 1em;

        border-radius: 1em;
        backdrop-filter: blur(25px);
        background-color: rgba(var(--highlight-color), 0.3);

        font: inherit;
        border: none;
        color: inherit;
        cursor: pointer;

        align-self: center;
        height: fit-content;
        font-size: clamp(1rem, 4cqi, 4rem);

        text-decoration: none;
    }

    .donation-button:hover {
        -webkit-animation: fa-bounce 0.7s infinite linear;
        -moz-animation: fa-bounce 0.7s infinite linear;
        -o-animation: fa-bounce 0.7s infinite linear;
        animation: fa-bounce 0.7s infinite linear;
    }

    .donation-blurb {
        font-size: clamp(1rem, 4cqi, 4rem);
    }

    .emphasis {
        font-size: 1.5em;
        font-weight: bold;
        text-decoration: underline double rgb(var(--primary-color));
    }
`;

@customElement('tn-donation')
export class DonationComponent extends LitElement {

    static styles = [DonationComponentStyles, FontawesomeBrands, Fontawesome];

    constructor() {
        super();
    }

    protected render() {
        return html`
            <tn-modal>
                <div slot="header">Buy me a coffee?</div>
                <div slot="content" class="donation-container">
                    <div class="donation-blurb">
                        <span class="emphasis">This application will always remain free,</span> but I love coffee and if you want to buy me one, I won't stop you.
                    </div>
                    <a class="donation-button" target="_blank" href="https://www.paypal.com/donate/?business=5NG3ZRJL9KA2G&no_recurring=0&item_name=Thank+you%21&currency_code=USD">
                        <i class="fa fa-circle-dollar-to-slot"></i>
                        <i class="fab fa-paypal"></i>
                    </a>
                </div>
            </tn-modal>
        `;
    }
}
