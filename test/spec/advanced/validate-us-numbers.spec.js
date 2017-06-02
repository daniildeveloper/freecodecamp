/* global expect */

describe('Return true if the passed string is a valid US phone number.', function () {
    it('telephoneCheck("1 555-555-5555") should return true', function () {
        expect(telephoneCheck("1 555-555-5555")).toEqual(true);
    });
    it('telephoneCheck("555-555-5555") should return a boolean.', function () {
        expect(typeof telephoneCheck("555-555-5555")).toEqual('boolean');
    });
    it('telephoneCheck("1 (555) 555-5555") should return true.', function () {
        expect(telephoneCheck("1 (555) 555-5555")).toEqual(true);
    });
    it('telephoneCheck("5555555555") should return true', function () {
        expect(telephoneCheck("5555555555")).toEqual(true);
    });
    it('telephoneCheck("555-555-5555") should return true.', function () {
        expect(telephoneCheck("555-555-5555")).toEqual(true);
    });
    it('telephoneCheck("(555)555-5555") should return true.', function () {
        expect(telephoneCheck("(555)555-5555")).toEqual(true);
    });
    it('telephoneCheck("1(555)555-5555") should return true.', function () {
        expect(telephoneCheck("1(555)555-5555")).toEqual(true);
    });
    it('telephoneCheck("555-5555") should return false.', function () {
        expect(telephoneCheck("555-5555")).toEqual(false);
    });
    it('telephoneCheck("5555555") should return false.', function () {
        expect(telephoneCheck("5555555")).toEqual(false);
    });
    it('telephoneCheck("1 555)555-5555") should return false.', function () {
        expect(telephoneCheck("1 555)555-5555")).toEqual(false);
    });
    it('telephoneCheck("1 555 555 5555") should return true.', function () {
        expect(telephoneCheck("1 555 555 5555")).toEqual(true);
    });
    it('telephoneCheck("1 456 789 4444") should return true.', function () {
        expect(telephoneCheck("1 456 789 4444")).toEqual(true);
    });
    it('telephoneCheck("123**&!!asdf#") should return false', function () {
        expect(telephoneCheck("123**&!!asdf#")).toEqual(false);
    });
});