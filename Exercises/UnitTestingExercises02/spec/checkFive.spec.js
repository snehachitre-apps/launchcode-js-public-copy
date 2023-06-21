const checkFive = require('../checkFive.js');

describe("checkFive", function() {

  it("Should return '{number} is less than 5.' for an input  less than number 5", function() {
    let output = checkFive(2);
    expect(output).toEqual("2 is less than 5.")
  });

  it("Should return '{number} is greater than 5.' for an input greater than number 5", function() {
    let output = checkFive(7);
    expect(output).toEqual("7 is greater than 5.")
  });

  it("Should return '{number} is equal to 5.' for an input number 5.", function() {
    let output = checkFive(5);
    expect(output).toEqual("5 is equal to 5.")
  });
});