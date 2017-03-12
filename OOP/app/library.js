// Augment Object.prototype by adding a method to Object.prototype
// Makes the method available to all objects.
// All JavaScript types can be augmented.
Object.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
}
var footballPlayer = function (position) {
	// Encapsulation;
	_private = {
		isHuman: true,
		hasJersey: true,
	};

	var that = {};
	that.position = position;

	that.position_of_play = function () {
		return that.position;
	}

	that.playerAction = function () {
		return 'Plays a round ball with both feet';
	}

	that.isHuman = function () {
		return _private.isHuman;
	}

	that.hasJersey = function () {
		return _private.hasJersey;
	}

	return that;
}

var goalkeeper = function (name, jersyNumber, gender, team, stats) {
	// inherit
	var that = footballPlayer('goalkeeper');
	that.name = name;
	that.jersyNumber = jersyNumber;
	that.gender = gender;
	that.team = team;
	that.stats = stats;

	that.get_name_of_team = function () {
		return that.team;
	};

	that.get_name = function () {
		return that.name;
	};

	that.get_stats = function () {
		return 'Shots saved: '+ stats.shotsSaved + ' \n' +
		'Percentage penalties saved: ' + stats.percentPenSaved;
	}

	return that;
}
module.exports = goalkeeper;