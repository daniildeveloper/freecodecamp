describe("Convert the given number into a roman numeral.", function () {
  it("convertToRoman(2) should return \"II\".", function () {
    convertToRoman(2).toEqual("II");
  });
  it("convertToRoman(3) should return \"III\".", function () {
    convertToRoman(3).toEqual("III");
  });
  it("convertToRoman(4) should return \"II\".", function () {
    convertToRoman(4).toEqual("IV");
  });
  it("convertToRoman(83) should return \"LXXXIII\"", function () {
    convertToRoman(83).toEqual("LXXXIII");
  });
  it("convertToRoman(500) should return \"D\"", function () {
    convertToRoman(500).toEqual("D");
  });
  it("convertToRoman(649) should return \"DCXLIX\"", function () {
    convertToRoman(649).toEqual("DCXLIX");
  });
  it("convertToRoman(798) should return \"LXXXIII\"", function () {
    convertToRoman(798).toEqual("DCCXCVIII");
  });
  it("convertToRoman(1000) should return \"M\"", function () {
    convertToRoman(1000).toEqual("M");
  });
  it("convertToRoman(891) should return \"DCCCXCI\"", function () {
    convertToRoman(891).toEqual("DCCCXCI");
  });
});