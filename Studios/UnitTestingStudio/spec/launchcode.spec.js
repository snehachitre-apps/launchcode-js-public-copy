// launchcode.spec.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function() {

  // Write your unit tests here!
  it("object launchcode has property oraganization and value is nonprofit", function() {
    expect(launchcode.organization).toEqual('nonprofit');
  });

  it("object launchcode has property executiveDirector  and value is Jeff", function() {
    expect(launchcode.executiveDirector).toEqual('Jeff');
  });

  it("object launchcode has property percentageCoolEmployees  and value is 100", function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  it("object launchcode has property programsOffered  has array of programs", function() {
    expect(launchcode.programsOffered).toContain('LC101');
    expect(launchcode.programsOffered).toContain('LaunchCode Women+');
    expect(launchcode.programsOffered).toContain('CodeCamp');
    expect(launchcode.programsOffered.length).toEqual(3);
    expect(launchcode.programsOffered).toBeInstanceOf(Array);
  });

});

describe("Testing launchOutput()", function() {
  it("When passed a number that is ONLY divisible by 2,  eturn 'Launch!'", function() {
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
  });

  it("When passed a number that is ONLY divisible by 3, return 'Code!'", function() {
    expect(launchcode.launchOutput(3)).toEqual("Code!");
  });

  it("When passed a number that is ONLY divisible by 5, return 'Rocks!", function() {
    expect(launchcode.launchOutput(5)).toEqual("Rocks!");
  });

  it(" When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'", function() {
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");

  });

  it(" When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", function() {
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
  });

  it(" When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!", function() {
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
  });

  it("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", function() {
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
    console.log("30", launchcode.launchOutput(30));
  });

  it("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'", function() {
    expect(launchcode.launchOutput(17)).toEqual("Rutabagas! That doesn't work.");

  });
});