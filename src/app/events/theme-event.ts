import { ConfigService } from '../services/config.service';

export const themeColors = ['primary' , 'highlight' , 'background'] as const;
export type ThemeColor = typeof themeColors[number];

export class ThemeEvent extends Event {
    updatedColors: Map<ThemeColor, string>;

    private constructor(updatedColors: Map<ThemeColor, string>) {
        super('theme-changed', { bubbles: true, composed: true });
        this.updatedColors = updatedColors;
    }

    // Helper method when just updating one color
    public static updatedColor(color: ThemeColor, value: string) {
        return new ThemeEvent(new Map([[color, value]]));
    }

    public static allReset() {
        const allColors = [];
        for (const color of themeColors) {
            allColors.push([color, ConfigService.defaultConfig[color]] as [ThemeColor, string]);
        }
        
        return new ThemeEvent(new Map(allColors));
    }
}

