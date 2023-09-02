#!/usr/bin/env node
import {build} from 'esbuild';
import importGlobPlugin from 'esbuild-plugin-import-glob';
import packageJson from './package.json' assert {type: 'json'};
import sh from 'shelljs';
import minimist from 'minimist';

// Build constants
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const dir = 'dist';
const debug = minimist(process.argv.slice(2))['debug'];

console.log('Building ' + env + ' version ' + packageJson.version);

// Initial build setup:

// Refresh the dist directory
if (sh.test('-e', dir)) {
  sh.rm('-rf', dir)
}
sh.mkdir(dir);

// Copy over the index.html
sh.cp('src/index.html', dir);

// ES build
export const buildOptions = {
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'dist/main.js',
  define: {
    'process.env.DEBUG': debug
  },
  plugins: [importGlobPlugin.default()],
};

if (env === 'production') {
  buildOptions['minify'] = true;
} else {
  buildOptions['sourcemap'] = true;
}

build(buildOptions).catch(err => {
  process.stderr.write(err.stderr);
  process.exit(1);
}).then(() => {
  console.log('Finished building ' + env + ' version ' + packageJson.version);
});
