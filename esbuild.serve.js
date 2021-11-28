#!/usr/bin/env node

import { buildOptions } from "./esbuild.build.js";

import esbuildServe from "esbuild-serve";

esbuildServe(
    buildOptions,
    {
        port: 7000,
        root: 'dist/',
        live: true
    }
);
