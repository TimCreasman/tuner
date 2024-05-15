export type AllowedColor = 'primary' | 'highlight' | 'background'

export class ThemeEvent extends Event {
    color: AllowedColor;
    value: string;

    constructor(color: AllowedColor, value: string) {
        super('theme-changed');
        this.color = color;
        this.value = value;
    }
}

