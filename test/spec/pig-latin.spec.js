describe('Translate the provided string to pig latin.', function () {
  it('translatePigLatin("california") should return "aliforniacay".', function () {
    expect(translatePigLatin("california")).toEqual("aliforniacay");
  });

  it('translatePigLatin("paragraphs") should return "aragraphspay".', function () {
    expect(translatePigLatin("paragraphs")).toEqual("aragraphspay");
  });

  it('translatePigLatin("algorithm") should return "algorithmway"', function () {
    expect(translatePigLatin("algorithm")).toEqual("algorithmway");
  });
});