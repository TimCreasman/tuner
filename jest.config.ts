import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    "transform": {
        "^.+\\.ts?$": "esbuild-jest"
    }
};
export default config;
