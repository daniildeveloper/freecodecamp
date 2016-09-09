describe('Find the missing letter in the passed letter range and return it.', function () {
  it('fearNotLetter("abce") should return "d".', function () {
    expect(fearNotLetter('abce')).toEqual("d");
  });

  it('fearNotLetter("abcdefghjklmno") should return "i".', function () {
    expect(fearNotLetter("abcdefghjklmno")).toEqual("i");
  });

  it('fearNotLetter("bcd") should return undefined.', function () {
    expect(fearNotLetter('bcd')).toEqual(undefined);
  });

  it('fearNotLetter("yz") should return "undefined".', function () {
    expect(fearNotLetter('yz')).toEqual(undefined);
  });
});