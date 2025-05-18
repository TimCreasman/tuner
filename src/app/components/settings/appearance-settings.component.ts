import { css, customElement, html, LitElement, nothing } from 'lit-element';
import { SettingsComponentStyles } from './settings.component';
import Fontawesome from '../../components/shared/css/fontawesome';
import { ConfigService } from '../../services/config.service';
import { Component, components } from '../../models/component.model';
import { subscribable, subscribe } from '../../events/event-bus';

export const AppearanceSettingsComponentStyles = css`
    .helper-text {
        font-size: 0.75em;
        font-style: italic;
        align-self: center;
        margin-inline-start: 0.75em;
        color: rgb(var(--background-color));
    }
    .nowrap {
        white-space: nowrap;
    }
`;

@customElement('tn-appearance-settings')
@subscribable
export class AppearanceSettingsComponent extends LitElement {
    static styles = [SettingsComponentStyles, AppearanceSettingsComponentStyles, Fontawesome];

    private settingsButtonHelperText = 'To get to this modal again without the settings button, double tap the screen.';

    @subscribe('config-change')
    private configUpdated = () => {
        this.requestUpdate();
    };

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
                                       @click=${(e: InputEvent) => this.updateComponent(e, componentId)}>
                                <span class="slider round"></span>
                            </label>
                            <span class="nowrap">${components[componentId]}</span>
                            <span class="helper-text">
                                ${componentId === 'settingsButton' ? this.settingsButtonHelperText : nothing}
                            </span>
                        </div>
                        `;
                    })}
                </div>
            </tn-accordion>
        `;
    }
}

