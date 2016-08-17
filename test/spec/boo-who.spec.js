describe('Check if a value is classified as a boolean primitive. Return true or false.', function () {
  it('booWho(true) should return true.', function () {
    booWho(true).toEqual(true);
  });

  it('booWho(false) should return true.', function () {
    booWho(false).toEqual(true);
  });

  it('booWho([1, 2, 3]) should return false.', function () {
    booWho([1, 2, 3]).toEqual(false);
  });

  it('booWho("true") should return false.', function () {
    booWho("true").toEqual(false);
  });
});