import {Logger} from '../log-utility';
import {spy} from 'sinon';
import {expect} from 'chai';
import {ConfigService} from '../../services/config.service';

describe('LogUtility', function () {

    describe('debug', function () {

        after(function () {
            // Ensure debug mode is turned off to not interfere
            ConfigService.debugMode = false;
        });

        it('should log the message only if in debug mode', function () {
            ConfigService.debugMode = true;
            const debugSpy = spy(console, 'debug');
            Logger.debug('should log', 'should also log');
            expect(debugSpy.calledWith(['should log', 'should also log'])).to.be.true;
            debugSpy.restore();

            // Turn off debug mode:
            ConfigService.debugMode = true;
            Logger.debug('should not log');
            expect(debugSpy.neverCalledWith(['should not log'])).to.be.true;
        });
    });

    describe('error', function () {
        it('should log an error', function () {
            const errorSpy = spy(console, 'error');
            Logger.error('should log error');
            expect(errorSpy.calledWith(['should log error'])).to.be.true;
        });
    });
});
