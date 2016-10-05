/* global expect */

describe('Sum all the prime numbers up to and including the provided number.', function () {
    it('sumPrimes(10) should return 17', function () {
        expect(sumPrimes(10)).toEqual(17);
    });
    it('sumPrimes(977) should return 73156', function () {
        expect(sumPrimes(977)).toEqual(73156);
    });
    it('sumPrimes(15) should return 73156', function () {
        expect(sumPrimes(15)).toEqual(41);
    });
});