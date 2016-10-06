/* global expect */

describe('Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).', function () {
    it('findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.', function () {
        expect(findElement([1, 3, 5, 8, 9, 10], function (num) {
            return num % 2 === 0;
        })).toEqual(8);
    });
    it('findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.', function () {
        expect(findElement([1, 3, 5, 9], function (num) {
            return num % 2 === 0;
        })).toEqual(undefined);
    });
});