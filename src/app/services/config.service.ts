import {MathUtility} from '../utilities/math-utility';

export type AllowedColor = 'primary' | 'highlight' | 'background'

type AppConfig = {
    accidentalMode: 0 | 1,
    frequencyOfA: number,
    debugMode: string,
} & { [key in AllowedColor]: string }

export class ThemeEvent extends Event {
    color: AllowedColor;
    value: string;

    constructor(color: AllowedColor, value: string) {
        super('theme-changed');
        this.color = color;
        this.value = value;
    }
}

export class ConfigService {

    public static defaultConfig: AppConfig = {
        // 0 for flats, 1 for sharps
        accidentalMode: 1,
        frequencyOfA: 440,
        debugMode: process.env.DEBUG,
        // Theme
        primary: '#FF7A00',
        highlight: '#FFFFFF',
        background: '#000000',
    };

    public static ALowerBoundFreq = 435;
    public static AUpperBoundFreq = 460;

    // Singleton
    private static _instance: ConfigService;

    public static Instance() {
        return this._instance || (this._instance = new this());
    }

    private static isHexCode(color: string) {
        return color.match(/^#[0-9a-f]{6}/i);
    }

    private static getPropertyName<T extends object>(o: T, expression: (x: { [Property in keyof T]: string }) => string) {
        const res = {} as { [Property in keyof T]: string };
        Object.keys(o).map(k => res[k as keyof T] = k);
        return expression(res);
    }

    private static getStoredValueOrDefault(key: keyof AppConfig) {
        return localStorage.getItem(key) ?? this.defaultConfig[key] as string;
    }

    static set config(config: AppConfig) {
        Object.keys(config).forEach((key: keyof AppConfig) => {
            localStorage.setItem(key, config[key].toString());
        });
    }

    static get config(): AppConfig {
        return {
            accidentalMode: this.accidentalMode,
            frequencyOfA: this.frequencyOfA,
            debugMode: 'false',
            primary: this.getColor('primary'),
            highlight: this.getColor('highlight'),
            background: this.getColor('background')
        };
    }

    static get debugMode(): boolean {
        return Boolean(this.getStoredValueOrDefault('debugMode'));
    }

    static set debugMode(mode: boolean) {
        localStorage.setItem(this.getPropertyName(this.defaultConfig, a => a.debugMode), mode.toString());
    }

    static set accidentalMode(mode: 0 | 1) {
        localStorage.setItem(this.getPropertyName(this.defaultConfig, a => a.accidentalMode), mode.toString());
    }

    static get accidentalMode(): 0 | 1 {
        return (Number(this.getStoredValueOrDefault('accidentalMode')) as 0 | 1);
    }

    static set frequencyOfA(frequency: number) {
        frequency = MathUtility.clamp(frequency, [this.ALowerBoundFreq, this.AUpperBoundFreq]);
        localStorage.setItem(this.getPropertyName(this.defaultConfig, a => a.frequencyOfA), frequency.toString());
    }

    static get frequencyOfA() {
        return Number(this.getStoredValueOrDefault('frequencyOfA'));
    }

    static setColor(type: AllowedColor, hexColor: string): void {
        if (this.isHexCode(hexColor)) {
            localStorage.setItem(this.getPropertyName(this.defaultConfig, a => a[type]), hexColor);
        }
    }

    static getColor(type: AllowedColor): string {
        return this.getStoredValueOrDefault(type);
    }
}
