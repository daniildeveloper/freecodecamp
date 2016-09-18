describe('Perform a search and replace on the sentence using the arguments provided and return the new sentence.', function () {
  it('myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".', function () {
    expect(replace("Let us go to the store", "store", "mall")).toEqual("Let us go to the mall");
  });

  it('myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".', function () {
    expect(replace("He is Sleeping on the couch", "Sleeping", "sitting")).toEqual('He is Sitting on the couch');
  });

  it('myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".', function () {
    expect(replace("This has a spellngi error", "spellngi", "spelling")).toEqual("This has a spelling error");
  });
});