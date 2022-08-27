import {CONFIG} from '../../config';

export class Logger {
    
    static debug(...params: unknown[]) {
        if (CONFIG.debugMode) {
            console.debug(params);
        }
    }

    static error(...params: unknown[]) {
        console.error(params);
    }
}
