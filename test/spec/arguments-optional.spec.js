/* global expect */

describe('Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.', function () {
    it('addTogether(2, 3) should return 5.', function () {
        expect(addTogether(2, 3)).toEqual(5);
    });
    it('addTogether(2)(3) should return 5.', function () {
        expect(addTogether(2)(3)).toEqual(5);
    });
    it('addTogether("http://bit.ly/IqT6zt") should return undefined.', function () {
        expect(addTogether("http://bit.ly/IqT6zt")).toEqual(undefined);
    });
    it('addTogether(2, "3") should return undefined.', function () {
        expect(addTogether(2, "3")).toEqual(undefined);
    });
    it('addTogether(2)([3]) should return undefined.', function () {
        expect(addTogether(2)([3])).toEqual(undefined);
    });
});