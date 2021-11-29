import {css, html, LitElement, svg} from "lit";
import {customElement, property} from 'lit/decorators.js';

const TunerNoteComponentStyles = css`
    .tuner-text {
        width: 200px;
        stroke: var(--outline-color);
        stroke-width: 3;
        fill: url(#noteGradient);
        text-align: center;
        font: bold 7em sans-serif;
    }
  
    .tuner-stop-color1 {
      stop-color: var(--primary-color);
    }
    .tuner-stop-color2 {
      stop-color: var(--background-color);
    }
`;

// const TunerNoteComponentSVG = svg`
// <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//                 <!--<rect x="0" y="0" width="100%" height="100%"/>-->
//                 <text x="50%" y ="50%" dominant-baseline="central" text-anchor="middle">${this.note}</text>
//                 <defs>
//                     <linearGradient id="noteGradient" gradientTransform="rotate(90)">
//                         <stop class="tuner-stop-color1" offset="${this.percent}"/>
//                         <stop class="tuner-stop-color2" offset="${this.percent}" />
//                     </linearGradient>
//                 </defs>
//             </svg>
// `;

@customElement('tn-tuner-note')
export class TunerNoteComponent extends LitElement {

    static styles = TunerNoteComponentStyles;

    connectedCallback() {
        super.connectedCallback()
        // connect to pitch service

        console.log('connected')
    }

    @property()
    note = 'C';

    @property()
    percent = '50%';

    render() {
        return html`
            <div class="tuner-text">
                ${this.percent}
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100%" height="100%"/>
                    <text x="50%" y ="50%" dominant-baseline="central" text-anchor="middle">${this.note}</text>
                    <defs>
                        <linearGradient id="noteGradient" gradientTransform="rotate(-90) translate(-1,0)">
                            <stop class="tuner-stop-color1" offset=${this.percent}/>
                            <stop class="tuner-stop-color2" offset=${this.percent}/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
`;
    }
}
