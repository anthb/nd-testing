'use strict';

describe("Test ND.myObj:", function() {
  
	beforeEach(function() {
		//
		spyOn(ND.myObj, 'init').andCallThrough();
		spyOn(ND.myObj, 'addUser').andCallThrough();
	});

	afterEach(function(){
		ND.myObj.reset();
	})

	it("Should be able to initialise", function() {
		
		expect(ND.myObj.init).toBeDefined();
		ND.myObj.init();
		dump(ND.myObj.getUsers());
		expect(ND.myObj.init).toHaveBeenCalled();
		expect(ND.myObj.addUser).toHaveBeenCalled();
		
	});

	it("Should be able to add users during initialise", function() {
		ND.myObj.init();
		expect(ND.myObj.getUsers().length).toEqual(3);
		expect(ND.myObj.getUsers()[0]).toEqual("Anthony");
	});

	it("Should be able to add users through addUser", function() {
		ND.myObj.init();
		ND.myObj.addUser('Ronie');
		expect(ND.myObj.getUsers().length).toEqual(4);
		expect(ND.myObj.getUsers()[3]).toEqual("Ronie");
	});

	it("Should be able to randomly generate a list of users", function() {

		ND.myObj.init();
		ND.myObj.addUser('Ronie');
		ND.myObj.addUser('Jarrod');
		ND.myObj.addUser('Dave');
		ND.myObj.addUser('Asaf');
		ND.myObj.addUser('Erwin');
		ND.myObj.addUser('Edwin');

		expect(ND.myObj.createList(4).length).toEqual(4);
		expect(ND.myObj.createList(4).length).toEqual(4);
		expect(ND.myObj.createList().length).toEqual(9);
		expect(ND.myObj.createList(14).length).toEqual(9);
	});

});
