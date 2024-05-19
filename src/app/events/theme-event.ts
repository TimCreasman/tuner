export type AllowedColor = 'primary' | 'highlight' | 'background'

export class ThemeEvent extends Event {
    color: AllowedColor;
    value: string;

    constructor(color: AllowedColor, value: string) {
        super('theme-changed', { bubbles: true, composed: true });
        this.color = color;
        this.value = value;
    }
}

