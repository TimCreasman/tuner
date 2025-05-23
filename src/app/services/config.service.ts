import { ThemeColor, themeColors } from '../constants/themes';
import { EventBus } from '../events/event-bus';
import { ThemeEvent } from '../events/theme-event';
import { AllowedAlgorithmTypes } from '../models/algorithm.model';
import { Component, components } from '../constants/components';
import { MathUtility } from '../utilities/math-utility';

type AppConfig = {
    accidentalMode: 0 | 1,
    frequencyOfA: number,
    debugMode: string,
    algorithm: AllowedAlgorithmTypes,
} & { [key in ThemeColor]: string } & { [key in Component]: string }

export class ConfigService {

    public static defaultConfig: Partial<AppConfig> = {
        // 0 for flats, 1 for sharps
        accidentalMode: 1,
        frequencyOfA: 440,
        debugMode: 'true',
        // Theme
        primary: '#FF7A00',
        highlight: '#FFFFFF',
        background: '#000000',
        // Pitch detection algorithm
        algorithm: 'McLeod',
        // Which components to show
        frequencyRing: 'true',
        volumeRing: 'true',
        noteFill: 'true',
        noteOctave: 'true',
        noteOutline: 'true',
        needle: 'true',
        donationButton: 'true',
        settingsButton: 'true',
    };

    public static ALowerBoundFreq = 415; // Lowest Baroque pitch
    public static AUpperBoundFreq = 466; // Highest Chorton baroque pitch

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
        return localStorage.getItem(key) as string ?? this.defaultConfig[key] as string;
    }

    static set config(config: AppConfig) {
        Object.keys(config).forEach((key: keyof AppConfig) => {
            localStorage.setItem(key, config[key].toString());
        });
    }

    static get config(): AppConfig {
        const config: Partial<AppConfig> = {
            accidentalMode: this.accidentalMode,
            frequencyOfA: this.frequencyOfA,
            debugMode: 'false',
            algorithm: this.algorithm
        };

        for(const color in themeColors) {
            config[color as ThemeColor] = this.getColor(color as ThemeColor);
        }

        for(const component in components) {
            config[component as Component] = this.getComponent(component as Component).toString();
        }

        return config as AppConfig;
    }

    static reset(): void {
        ConfigService.accidentalMode = this.defaultConfig.accidentalMode;
        ConfigService.frequencyOfA = this.defaultConfig.frequencyOfA;
        for(const color of themeColors) {
            ConfigService.setColor(color, this.defaultConfig[color]);
        }
        ConfigService.algorithm = this.defaultConfig.algorithm;
        for(const component in components) {
            ConfigService.setComponent(component as Component, true);
        }
    }

    static get debugMode(): boolean {
        return this.getStoredValueOrDefault('debugMode') === 'true';
    }

    static set debugMode(mode: boolean) {
        localStorage.setItem(this.getPropertyName(this.defaultConfig, a => a.debugMode), mode.toString());
    }

    static set accidentalMode(mode: 0 | 1) {
        localStorage.setItem(this.getPropertyName(this.defaultConfig, a => a.accidentalMode), mode.toString());
        EventBus.getInstance().dispatch<Event>('config-change', new Event('config-change'));
    }

    static get accidentalMode(): 0 | 1 {
        return (Number(this.getStoredValueOrDefault('accidentalMode')) as 0 | 1);
    }

    static set frequencyOfA(frequency: number) {
        frequency = MathUtility.clamp(frequency, [this.ALowerBoundFreq, this.AUpperBoundFreq]);
        localStorage.setItem(this.getPropertyName(this.defaultConfig, a => a.frequencyOfA), frequency.toString());
        EventBus.getInstance().dispatch<Event>('config-change', new Event('config-change'));
    }

    static get frequencyOfA() {
        return Number(this.getStoredValueOrDefault('frequencyOfA'));
    }

    static setColor(type: ThemeColor, hexColor: string): void {
        if (this.isHexCode(hexColor)) {
            localStorage.setItem(this.getPropertyName(this.defaultConfig, a => a[type]), hexColor);
            EventBus.getInstance().dispatch<ThemeEvent>('theme-change', ThemeEvent.updatedColor(type, hexColor));
        }
    }

    static getColor(type: ThemeColor): string {
        return this.getStoredValueOrDefault(type);
    }

    static set algorithm(algorithm: string) {
        localStorage.setItem(this.getPropertyName(this.defaultConfig, a => a.algorithm), algorithm);
        EventBus.getInstance().dispatch<Event>('config-change', new Event('config-change'));
    }

    static get algorithm(): AllowedAlgorithmTypes {
        return this.getStoredValueOrDefault('algorithm') as AllowedAlgorithmTypes;
    }

    static setComponent(type: Component, doShow: boolean) {
        localStorage.setItem(this.getPropertyName(this.defaultConfig, a => a[type]), doShow.toString());
        EventBus.getInstance().dispatch<Event>('config-change', new Event('config-change'));
    }

    static getComponent(type: Component) {
        return this.getStoredValueOrDefault(type) === 'true';
    }
}

