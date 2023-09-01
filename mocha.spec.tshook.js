/*
This file tells ts-node which tsconfig file to use for the mocha tests.
 */

import {register} from 'ts-node';

register({
    project: './tsconfig.spec.json',
});
