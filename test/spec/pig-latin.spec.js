describe('Translate the provided string to pig latin.', function(){
  it('translatePigLatin("california") should return "aliforniacay".', function(){
    translatePigLatin("california").toEqual("aliforniacay");
  });

  it('translatePigLatin("paragraphs") should return "aragraphspay".', function(){
    translatePigLatin("paragraphs").toEqual("aragraphspay");
  });

  it('translatePigLatin("algorithm") should return "algorithmway"', function(){
    translatePigLatin("algorithm").toEqual("algorithmway");
  });
});