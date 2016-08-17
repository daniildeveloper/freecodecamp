describe('Find the missing letter in the passed letter range and return it.', function () {
  it('fearNotLetter("abce") should return "d".', function () {
    fearNotLetter('abce').toEqual("d");
  });

  it('fearNotLetter("abcdefghjklmno") should return "i".', function () {
    fearNotLetter("abcdefghjklmno").toEqual("i");
  });

  it('fearNotLetter("bcd") should return undefined.', function () {
    fearNotLetter('bcd').toEqual(undefined);
  });

  it('fearNotLetter("abce") should return "d".', function () {
    fearNotLetter('yz').toEqual(undefined);
  });
});