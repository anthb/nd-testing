'use strict';
// ND Namespace
var ND = {};

ND.myObj = (function() {
	
	// Privates
	var users = [];

	// Return an exposed object to the public
	return {

		init: function() {

			var someVar = null;
			//console.log(this.getUsers());
			this.addUser('Anthony');
			this.addUser('Eduardo');
			this.addUser('Michael');
		},

		reset: function() {
			users = [];
		},

		getUsers: function() {

			return users;
		},

		addUser: function(newUser) {

			users.push(newUser);
			//console.log(this.getUsers());
		},

		createList: function(numberUsers) {

			// pass in argument # of users
			// If no users exist create the # based on array.length
			// If argument for # users is > array.length change value to array.length
			// Does not account for random list

			var list;

			if(!numberUsers) {
				numberUsers = users.length;
			} else if(numberUsers > users.length) {
				numberUsers = users.length;
			}


			// Need to slice from the next number (0 based) which this does 
			return users.slice(0, numberUsers);
		}
	};

})();
