"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notation_utility_1 = require("../app/notation-utility");
describe('NotationUtility', function () {
    describe('hzToLetter', function () {
        it('should return C0 if frequency below C0', function () {
            expect(notation_utility_1.NotationUtility.hzToNoteName(notation_utility_1.C0 - 1)).toEqual('C0');
        });
        it('should return B9 if above the frequency threshold', function () {
            expect(notation_utility_1.NotationUtility.hzToNoteName(notation_utility_1.B9 + 1)).toEqual('B9');
        });
        it('should not error out for normal bounded frequencies', function () {
            var _loop_1 = function (i) {
                expect(function () {
                    notation_utility_1.NotationUtility.hzToNoteName(i);
                }).not.toThrowError();
            };
            for (var i = notation_utility_1.C0; i < notation_utility_1.B9; i += 1) {
                _loop_1(i);
            }
        });
    });
});
