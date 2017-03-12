module.exports = {
	getPrimes: function (n) {
		if (Number.isInteger(n) === false) {
			return 'wrong input type';
		}
		else {
			var arrayOfPrimes = []
	    	for (var i = 0; i <= n; i++) {

		    	if (this.isPrime(i)) {
			   	arrayOfPrimes.push(i);
		    	}
	    	}
	    return arrayOfPrimes;
		}
	},

	isPrime: function (num) {
		if ( num < 2) return false;
		for (var i=2; i<num; i++) {
			if (num%i === 0){
				return false;
			}
		}
		return true;
	}
}