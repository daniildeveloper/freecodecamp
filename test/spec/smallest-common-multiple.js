/* global expect */

describe('Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.  ', function () {
    it("smallestCommons([1, 5]) should return 60.", function () {
        expect(smallestCommons([1, 5])).toEqual(60);
    });
    it("smallestCommons([5, 1]) should return 60.", function () {
        expect(smallestCommons([5, 1])).toEqual(60);
    });
    it('smallestCommons([1, 13]) should return 360360', function () {
        expect(smallestCommons([1, 13])).toEqual(360360);
    });
    it('smallestCommons([23, 18]) should return 6056820.', function () {
        expect(smallestCommons([23, 18])).toEqual(6056820);
    });
});