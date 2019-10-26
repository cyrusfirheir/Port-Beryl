
setup.sex = {
	MALE: 'male',
	FEMALE: 'female',
	OTHER: 'other'
}

window.Person = function (config) {
	// name
	this.firstName    = '';
  this.middleName   = '';
  this.lastName     = '';
	// nicknames
	this.nick					=	[];	// public nicks
	this.PCnick				= []; // nicks PC uses for them
	this.nickPC				=	[]; // nicks they use for PC
	// sex (male, female, other)
  this.sex          = '';
	// birth date in [M, D]
	this.birthday			=	[0, 0];


	Object.keys(config).forEach(function (pn) {
		this[pn] = clone(config[pn]);
	}, this);
};

Person.prototype.clone = function () {
	return new Person(this);
};

Person.prototype.toJSON = function () {
	var ownData = {};
	Object.keys(this).forEach(function (pn) {
		ownData[pn] = clone(this[pn]);
	}, this);
	return JSON.reviveWrapper('new Person($ReviveData$)', ownData);
};
