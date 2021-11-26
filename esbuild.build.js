#!/usr/bin/env node
import { build } from 'esbuild';
import { exec } from 'child_process';

const copyIndexHtml = {
    name: 'copyIndex',
    setup() {
        exec('cp src/index.html dist/index.html',(error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log('copied index.html');
        });
    }
}

export const buildOptions = {
    entryPoints: ['src/main.ts'],
    bundle: true,
    outfile: 'dist/main.js',
    sourcemap: true,
    plugins: [copyIndexHtml],
}

build(buildOptions).catch(err => {
    process.stderr.write(err.stderr)
    process.exit(1)
});


