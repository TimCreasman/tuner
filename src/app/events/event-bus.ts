import { LitElement } from 'lit';
import 'reflect-metadata';

type Callback = (...args: any[]) => any;
type OverridableLitElement = Constructor<Pick<LitElement, keyof LitElement>>
type Constructor<T = Record<string, unknown>> = new (...args: any[]) => T;

const EVENT_META = Symbol();


export interface Registry {
    unregister: () => void;
}

export interface Callable {
    [key: string]: Callback;
}

export interface Subscriber {
    [key: string]: Callable;
}

export interface IEventBus {
    dispatch<T>(event: string, arg?: T): void;
    register(event: string, callback: Callback): Registry;
}

export class EventBus implements IEventBus {
    private subscribers: Subscriber;
    private static nextId = 0;
    private static instance?: EventBus = undefined;

    private constructor() {
        this.subscribers = {};
    }

    public static getInstance(): EventBus {
        if (this.instance === undefined) {
            this.instance = new EventBus();
        }

        return this.instance;
    }

    public dispatch<T>(event: string, arg?: T): void {
        const subscriber = this.subscribers[event];

        if (subscriber === undefined) {
            return;
        }

        Object.keys(subscriber).forEach(key => subscriber[key](arg));
    }

    public register(event: string, callback: Callback): Registry {
        const id = this.getNextId();
        if (!this.subscribers[event]) this.subscribers[event] = {};

        this.subscribers[event][id] = callback;

        return {
            unregister: () => {
                if (this.subscribers[event] === undefined) {
                    return;
                }

                delete this.subscribers[event][id];
                if (Object.keys(this.subscribers[event]).length === 0)
                    delete this.subscribers[event];
            }
        };
    }

    private getNextId(): number {
        return EventBus.nextId++;
    }
}

/**
 * Decorator used to subscribe a method to the specified event
**/
export function subscribe(event: string) {
    return (proto: any, key: string) => {
        const existing: { key: string; event: string }[] =
            Reflect.getMetadata(EVENT_META, proto) || [];
        existing.push({ key, event });
        Reflect.defineMetadata(EVENT_META, existing, proto);
    };
}

/**
 * Class decorator to setup all subscribe methods and destroy them when the component disconnects
**/
export function subscribable<T extends OverridableLitElement>(constructor: T)  {

    return class extends constructor {
        $subscriptions: Registry[] = [];

        constructor(...args: any[]) {
            super(...args);
            const metas: { key: string; event: string }[] =
                Reflect.getMetadata(EVENT_META, constructor.prototype) || [];

            metas.forEach(meta => {
                const method = (this as any)[meta.key].bind(this);
                this.$subscriptions.push(EventBus.getInstance().register(meta.event, method));
            });
        }
        
        //eslint-disable-next-line
        //@ts-ignore
        // TODO - Find out why this complains
        // Automatically unregister when component dies
        disconnectedCallback(): void {
            super.disconnectedCallback();
            this.$subscriptions.forEach(sub => {
                sub.unregister();
            });
        }
    };
}
