import assert from 'assert';
import {expect} from 'chai';

const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase();

describe('Array', () => {
    beforeEach(() => console.log('beforeEach'));
    afterEach(() => console.log('afterEach'));
    describe('#test1', () => {
        it('case1', () => {
            assert.equal(3, [1, 2, 3, 4].indexOf(4));
        });
    });
    describe('#test2', () => {
        it('case1', () => {
            expect(capitalize("express")).to.equal("Express");
            expect(capitalize("cats")).to.equal("Cats");
        });
    });
});