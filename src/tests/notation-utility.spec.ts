import {B9, C0, NotationUtility} from "../app/notation-utility";

describe('NotationUtility', function () {
    describe('hzToLetter', function () {

        it('should return C0 if frequency below C0', function () {
            expect(NotationUtility.hzToNoteName(C0 - 1)).toEqual('C0');
        });

        it('should return B9 if above the frequency threshold', function () {
            expect(NotationUtility.hzToNoteName(B9 + 1)).toEqual('B9');
        });

        it('should not error out for normal bounded frequencies', function () {
            for (let i = C0; i < B9; i+=1) {
                expect(() => {
                    NotationUtility.hzToNoteName(i)
                }).not.toThrowError();
            }
        });
    });
});
