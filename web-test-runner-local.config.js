import commonConfig from './web-test-runner.config.js';
import { chromeLauncher } from '@web/test-runner';

commonConfig.browsers = [
    chromeLauncher({
        launchOptions: {
            args: ['--use-fake-ui-for-media-stream'],
            executablePath: '/usr/bin/chromium-browser'
        },
    }),
];

export default commonConfig;
