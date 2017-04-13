import {expect} from 'chai';

describe('Object', () => {
    it('isFrozen', () => {
        const name = "mert";
        const surname = "inan";
        const obj = Object.freeze({name, surname});

        expect(Object.isFrozen(obj)).to.equal(true);

        expect(1).to.equal(1);
        expect(true).to.equal(true);
        expect({}).to.deep.equal({});
        expect(0).to.equal(0);
    });
});
