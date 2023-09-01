import {legacyPlugin} from '@web/dev-server-legacy';
import {esbuildPlugin} from '@web/dev-server-esbuild';

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
  plugins: [
    esbuildPlugin({
      ts: true,
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
