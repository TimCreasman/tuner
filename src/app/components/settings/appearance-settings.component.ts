import { customElement, html, LitElement, state } from 'lit-element';
import { SettingsComponentStyles } from './settings.component';
import Fontawesome from '../../components/shared/css/fontawesome';
import { Component, ConfigService } from '../../services/config.service';

@customElement('tn-appearance-settings')
export class ExperimentalSettingsComponent extends LitElement {
    static styles = [SettingsComponentStyles, Fontawesome];


    @state()
    private upperRingComponent = ConfigService.getComponent('upperRing');

    @state()
    private lowerRingComponent = ConfigService.getComponent('lowerRing');

    @state()
    private noteFillComponent = ConfigService.getComponent('noteFill');

    @state()
    private noteOctaveComponent = ConfigService.getComponent('noteOctave');

    @state()
    private noteOutlineComponent = ConfigService.getComponent('noteOutline');

    constructor() {
        super();
        console.log(this.upperRingComponent);
        
    }

    // private updateAppearance(inputEvent: InputEvent): void {}
    //
    private updateComponent(inputEvent: InputEvent, component: Component): void {
        const value = (<HTMLInputElement>inputEvent.target).checked;
        // this.accidentalMode = value;
        ConfigService.setComponent(component, value);
    }

    protected render() {
        return html`
                    <tn-accordion>
                        <div slot="header">Appearance</div>
                        <div slot="content">
                            <div class="row">
                                <label for="flats" class="switch">
                                    <input id="flats"
                                           type="checkbox"
                                           .checked="${this.upperRingComponent}"
                                           @click= ${(e: InputEvent) => this.updateComponent(e, 'upperRing')}>
                                    <span class="slider round"></span>
                                </label>
                            <span>Upper Ring</span>
                            </div>
                        </div>
                    </tn-accordion>
        `;
    }
}
