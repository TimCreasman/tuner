// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    transform: {
        "^.+\\.ts?$": "esbuild-jest"
    }
};

module.exports = config;
