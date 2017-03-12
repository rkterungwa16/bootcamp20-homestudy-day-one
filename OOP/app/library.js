// Augment object prototype
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

	that.player_action = function () {
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

Object.method ('superior', function (name) {
	var that = this,
	    method = that[name];
	return function () {
		return method.apply(that, arguments);
	}
});

var goalkeeper = function (name, jersyNumber, gender, team, stats) {
	// inherit
	var that = footballPlayer('goalkeeper');
	that.name = name;
	that.jersyNumber = jersyNumber;
	that.gender = gender;
	that.team = team;
	that.stats = stats;

    // Get the method of same name from parent class
	super_get_name = that.superior('player_action');

	// Polymorphism: make method perform different action.
	that.player_action = function () {
		return super_get_name() + ' and catches ball with hands';
	}

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