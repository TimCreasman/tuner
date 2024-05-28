export const themeColors = ['primary' , 'highlight' , 'background'] as const;
export type ThemeColor = typeof themeColors[number];

export class ThemeEvent extends Event {
    color: ThemeColor;
    value: string;

    constructor(color: ThemeColor, value: string) {
        super('theme-changed', { bubbles: true, composed: true });
        this.color = color;
        this.value = value;
    }
}

