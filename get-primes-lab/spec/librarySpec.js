var myApp = require("../app/library");

describe("Case for non numerical inputs", function() {

    it("should return 'wrong input type' for []", function() {
      expect(getPrimes([])).toEqual('wrong input type');
    });

    it("should return 'wrong input type' for '5'", function() {
       expect(getPrimes('5')).toEqual('wrong input type');
    });

    it("should return 'wrong input type' for 'seven'", function() {
       expect(getPrimes('seven')).toEqual('wrong input type');
    });

    it("should return 'wrong input type' for boolean", function() {
       expect(getPrimes(true)).toEqual('wrong input type');
    });

    it("should return'wrong input type' for a callback function", function() {
      var one = function () {};
       expect(getPrimes(one)).toEqual('wrong input type');
    });

    it("should return 'wrong input type' for and object", function() {
      var one = {};
       expect(getPrimes(one)).toEqual('wrong input type');
    });

});

describe("Case for non integer numerical inputs", function() {

      it("should return 'wrong input type' for 6.1", function() {
       expect(getPrimes(6.1)).toEqual('wrong input type');
    });

});


describe("Case for expected outputs", function() {

      it("should return [] for 0", function() {
      expect(getPrimes(0)).toEqual([]);
    });

      it("should return [] for 1", function() {
      expect(getPrimes(1)).toEqual([]);
    });

      it("should return [ 2, 3, 5, 7, 11 ] for 11", function() {
      expect(getPrimes(11)).toEqual([ 2, 3, 5, 7, 11 ]);
    });

      it("should return [ 2 ] for 2", function() {
      expect(getPrimes(2)).toEqual([ 2 ]);
    });

      it("should return [ 2, 3 ] for 3", function() {
      expect(getPrimes(3)).toEqual([ 2, 3 ]);
    });

      it("should return [ 2, 3 ] for 4", function() {
      expect(getPrimes(4)).toEqual([ 2, 3 ]);
    });

      it("should return [ 2, 3, 5] for 6", function() {
      expect(getPrimes(6)).toEqual([ 2, 3, 5 ]);
    });

});
