describe('Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.', function () {
    it('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].', function () {
        expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
    });
});


