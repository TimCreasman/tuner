import {ConfigService} from '../services/config.service';

export class Logger {

    static debug(...params: unknown[]) {
        if (ConfigService.debugMode) {
            console.debug(...params);
        }
    }

    static error(...params: unknown[]) {
        console.error(...params);
    }
}
