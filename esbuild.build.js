#!/usr/bin/env node
import {build} from 'esbuild';
import {exec} from 'child_process';
import importGlobPlugin from 'esbuild-plugin-import-glob';

const copyIndexHtml = {
    name: 'copyIndex',
    setup() {
        exec('cp src/index.html dist/index.html', (error, stdout, stderr) => {
            if (error) {
                // eslint-disable-next-line no-undef
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                // eslint-disable-next-line no-undef
                console.log(`stderr: ${stderr}`);
                return;
            }
            // eslint-disable-next-line no-undef
            console.log('copied index.html');
        });
    }
}

export const buildOptions = {
    entryPoints: ['src/main.ts'],
    bundle: true,
    outfile: 'dist/main.js',
    sourcemap: true,
    plugins: [copyIndexHtml, importGlobPlugin.default()],
}

build(buildOptions).catch(err => {
    // eslint-disable-next-line no-undef
    process.stderr.write(err.stderr)
    // eslint-disable-next-line no-undef
    process.exit(1)
});


