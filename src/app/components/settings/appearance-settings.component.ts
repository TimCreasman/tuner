import { customElement, html, LitElement, state } from 'lit-element';
import { SettingsComponentStyles } from './settings.component';
import Fontawesome from '../../components/shared/css/fontawesome';
import { ConfigService } from '../../services/config.service';
import { Component, components } from '../../models/component.model';

@customElement('tn-appearance-settings')
export class ExperimentalSettingsComponent extends LitElement {
    static styles = [SettingsComponentStyles, Fontawesome];

    constructor() {
        super();
    }

    private updateComponent(inputEvent: InputEvent, component: Component): void {
        const value = (<HTMLInputElement>inputEvent.target).checked;
        ConfigService.setComponent(component, value);
    }

    protected render() {
        return html`
            <tn-accordion>
                <div slot="header">Appearance</div>
                <div slot="content">
                    ${Object.keys(components).map((componentId: Component) => {
                        return html`
                        <div class="row">
                            <label for="${componentId}" class="switch">
                                <input id="${componentId}"
                                       type="checkbox"
                                       .checked="${ConfigService.getComponent(componentId)}"
                                       @click= ${(e: InputEvent) => this.updateComponent(e, componentId)}>
                                <span class="slider round"></span>
                            </label>
                            <span>${components[componentId]}</span>
                        </div>
                        `;
                    })}
                </div>
            </tn-accordion>
        `;
    }
}
