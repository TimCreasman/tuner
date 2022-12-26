import {MathUtility} from '../math-utility';
import {expect} from 'chai';

describe('MathUtility', () => {
    describe('map', () => {
        it('should map values to another range', () => {
            expect(MathUtility.map(5, [0, 10], [0, 1])).to.eq(0.5);
        });
        it('should be able to reverse ranges', () => {
            expect(MathUtility.map(1, [0, 10], [1, 0])).to.eq(0.9);
        });
        it('should allow values outside of the range', () => {
            expect(MathUtility.map(15, [0, 10], [0, 1])).to.eq(1.5);
        });
    });

    describe('clamp', () => {
        it('should force a number into the specified range', () => {
            expect(MathUtility.clamp(10, [0, 1])).to.eq(1);
            expect(MathUtility.clamp(-10, [0, 1])).to.eq(0);
        });
        it('should not change the number if it is already in the range', () => {
            expect(MathUtility.clamp(5, [0, 10])).to.eq(5);
            expect(MathUtility.clamp(0, [0, 10])).to.eq(0);
            expect(MathUtility.clamp(10, [0, 10])).to.eq(10);
        });
    });

    describe('round', () => {
        it('should round a number to the specified decimals', () => {
            expect(MathUtility.round(1.1234, 2)).to.eq(1.12);
            expect(MathUtility.round(1.9876, 3)).to.eq(1.988);
        });
    });
});
