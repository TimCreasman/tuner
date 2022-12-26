import {SimpleUniqueBuffer} from '../simple-unique-buffer';
import {expect} from 'chai';

describe('SimpleBuffer', function () {

    let testBuffer: SimpleUniqueBuffer;

    beforeEach(function () {
        testBuffer = new SimpleUniqueBuffer(3);
    });

    it('should set size to size specified', function () {
        const testBuffer = new SimpleUniqueBuffer(3);
        expect(testBuffer.bufferSize).to.equal(3);
    });

    it('should not allow a size less than 1', function () {
        expect(() => {
            new SimpleUniqueBuffer(0);
        }).to.throw(RangeError);

        expect(() => {
            new SimpleUniqueBuffer(-100);
        }).to.throw(RangeError);
    });

    describe('add', function () {

        afterEach(function () {
            testBuffer['_buffer'] = [];
        });

        it('should allow number values to be added to the buffer', function () {
            expect(() => {
                testBuffer.add(10);
                testBuffer.add(-10);
                testBuffer.add(Infinity);
            }).not.to.throw();
        });

        it('should only allow bufferSize items in its buffer', function () {
            expect(testBuffer['_buffer'].length).to.eq(0);
            testBuffer.add(1);
            testBuffer.add(2);
            testBuffer.add(3);
            testBuffer.add(4);
            expect(testBuffer['_buffer'].length).to.eq(3);
        });

        it('should ignore duplicate values', function () {
            expect(testBuffer['_buffer'].length).to.eq(0);
            testBuffer.add(1);
            testBuffer.add(1);
            testBuffer.add(1);
            expect(testBuffer['_buffer'].length).to.eq(1);
        });

        it('should only shift off old values as values get added to the buffer ', function () {
            expect(testBuffer['_buffer'].length).to.eq(0);
            testBuffer.add(1);
            testBuffer.add(2);
            testBuffer.add(3);
            testBuffer.add(4);
            testBuffer.add(5);
            expect(testBuffer['_buffer'].toString()).to.eq('3,4,5');
        });
    });

    describe('average', function () {

        afterEach(function () {
            testBuffer['_buffer'] = [];
        });

        it('should average the buffer', function () {
            testBuffer.add(15);
            testBuffer.add(35);
            testBuffer.add(10);
            expect(testBuffer.average).to.eq(20);

            // Adding two more values should overwrite the buffer:
            testBuffer.add(-9);
            testBuffer.add(9);
            testBuffer.add(21);
            expect(testBuffer.average).to.eq(7);
        });
    });
});
