import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Note } from '../../utilities/note-utility';
import ButtonStyles from '../../components/shared/css/button-styles';
import Fontawesome from '../../components/shared/css/fontawesome';

const PitchPipePlayerComponentStyles = css`
    .play-note-button-container {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        pointer-events: none;
    }

    .play-note-button {
        pointer-events: auto;
        width: 9ch;
        height: 9ch;
        border-radius: 50%;
        margin-top: 38.5%;
        color: rgb(var(--text-color));
    }
`;

@customElement('tn-pitch-pipe-player')
export class PitchPipeComponent extends LitElement {

    static styles = [PitchPipePlayerComponentStyles, ButtonStyles, Fontawesome];

    @property()
    note: Note;

    private _handlePlay = () => {
        new Audio(`./audio/pitch${this.note?.index}.mp3`).play();
    };

    render() {
        return html`
                <div class="play-note-button-container" @click=${this._handlePlay}>
                    <button class="play-note-button" aria-label="Play Note"><i class="fa fa-circle-play"></i></button>
                </div>
        `;  
    }
}
