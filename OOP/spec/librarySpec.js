var myApp = require("../app/library");

describe('Football Player Class: Create a Parent footballPlayer class and a child goalkeeper class', function () {
  it("Should be a type of 'object', and an instance of a 'goalkeeper' class", function () {
    var cechStats = {shotsSaved: 3, percentPenSaved: 20}
        var petre = myApp('Petre Cech', 1, 'male',  'Arsenal', cechStats);
        expect(typeof petre).toEqual(typeof {});
  });

  it("Should have a position and gender property", function () {
    var cechStats = {shotsSaved: 3, percentPenSaved: 20}
        var petre = myApp('Petre Cech', 1, 'male',  'Arsenal', cechStats);
        expect(petre.position).toBe('goalkeeper');
        expect(petre.gender).toBe('male');
  });

  it("Should be a human being", function () {
    var cechStats = {shotsSaved: 3, percentPenSaved: 20}
    var petre = myApp('Petre Cech', 1, 'male',  'Arsenal', cechStats);
    expect(petre.isHuman()).toBe(true);
  });

  it("Should have jersey", function () {
    var cechStats = {shotsSaved: 3, percentPenSaved: 20}
    var petre = myApp('Petre Cech', 1, 'male',  'Arsenal', cechStats);
    expect(petre.hasJersey()).toBe(true);
  });

  it("Should have a position of play", function () {
    var cechStats = {shotsSaved: 3, percentPenSaved: 20}
    var petre = myApp('Petre Cech', 1, 'male',  'Arsenal', cechStats);
    expect(petre.position).toBe('goalkeeper');
  })
})