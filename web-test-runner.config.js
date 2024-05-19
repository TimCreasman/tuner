import { legacyPlugin } from '@web/dev-server-legacy';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';
import rollupCommonjs from '@rollup/plugin-commonjs';

const commonjs = fromRollup(rollupCommonjs);

export default {
    nodeResolve: true,
    concurrency: 10,
    files: ['src/**/*.spec.ts'],
    preserveSymlinks: true,
    testFramework: {
        // https://mochajs.org/api/mocha
        config: {
            ui: 'bdd',
            timeout: '60000',
        },
    },
    // Do this to expose environment variables to the test framework
    testRunnerHtml: testFramework =>
        `<html>
      <body>
        <script>window.process = { env: { NODE_ENV: "development", DEBUG: false } }</script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`,
    plugins: [
        esbuildPlugin({
            ts: true,
        }),
        // fix for the fft.js module
        commonjs({
            include: [
                // the commonjs plugin is slow, list the required packages explicitly:
                '**/node_modules/fft.js/**/*',
                '**/node_modules/next-pow-2/**/*',
                '**/node_modules/pitchfinder/**/*',
            ],
        }),
        // make sure this plugin is always last
        legacyPlugin({
            polyfills: {
                webcomponents: true,
                // Inject lit's polyfill-support module into test files, which is required
                // for interfacing with the webcomponents polyfills
                custom: [
                    {
                        name: 'lit-polyfill-support',
                        path: 'node_modules/lit/polyfill-support.js',
                        test: '!(\'attachShadow\' in Element.prototype) || !(\'getRootNode\' in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force',
                        module: false,
                    },
                ],
            },
        }),
    ],
    coverageConfig: {
        include: ['src/**/*.ts!(*.spec.ts)'],
    }
};
