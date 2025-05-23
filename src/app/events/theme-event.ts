import { ThemeColor, themeColors } from '../constants/themes';
import { ConfigService } from '../services/config.service';

export class ThemeEvent extends Event {
    updatedColors: Map<ThemeColor, string>;

    constructor(updatedColors: Map<ThemeColor, string>) {
        super('theme-change', { bubbles: true, composed: true });
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

