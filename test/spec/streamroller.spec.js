/* global expect */

describe('Flatten a nested array. You must account for varying levels of nesting', function () {
    it('steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].', function () {
        expect(steamrollArray([[["a"]], [["b"]]])).toEqual(["a", "b"]);
    });
    it('steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].', function () {
        expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
    });
    it('steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]', function () {
        expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
    });
    it('steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].', function () {
        expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
    });
});