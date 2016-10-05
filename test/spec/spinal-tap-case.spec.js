/* global expect */

describe('Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.', function () {
    it('spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".', function () {
        expect(spinalCase("This Is Spinal Tap")).toEqual("this-is-spinal-tap");
    });
});