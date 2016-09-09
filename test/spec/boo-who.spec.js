describe('Check if a value is classified as a expect(boolean primitive. Return true or false.', function () {
  it('expect(booWho(true) should return true.', function () {
    expect(booWho(true)).toEqual(true);
  });

  it('expect(booWho(false) should return true.', function () {
    expect(booWho(false)).toEqual(true);
  });

  it('expect(booWho([1, 2, 3]) should return false.', function () {
    expect(booWho([1, 2, 3])).toEqual(false);
  });

  it('expect(booWho("true") should return false.', function () {
    expect(booWho("true")).toEqual(false);
  });
});