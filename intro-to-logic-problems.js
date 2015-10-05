//LOWEST MISSING INTEGER

//Write a program that returns the lowest missing integer from an array of random values.

var arr = [10, 5, 23, 423, 43, 2, 5, 5, 3];
var lowest = arr[0];

var getLowest = function (curr, next) {

	if (curr < next) {
		return curr; 
	}
	else {
		return next;
	}
}

var getLowestMissing = function (lowest) {

	if (arr.indexOf(lowest + 1) >= 0) {
		getLowestMissing(lowest + 1);
	}
	else {
		lowest_missing = lowest + 1;
	}

	return lowest_missing;

}

for (var i = 0; i < arr.length; i++) {
	if (arr[i+1] < arr.length) {
		lowest = getLowest(lowest, arr[i+1]);
	}
}

console.log(lowest);
console.log(getLowestMissing(lowest));



// Chess board problem - taken from ELOQUENT JAVASCRIPT CHAPTER 2

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8,
// and change the program so that it works for any size, outputting a grid of the given width and height.

// var size = 8;

// var str = "";
// 	for (var i = 0; i<size; i++) {
// 		for (var j = 0; j<size; j++) {
// 			if (((i + j) % 2) == 0) {	x
// 				str += " ";
// 			}
// 			else {
// 				str += "#";
// 			}

// 			if (j == size - 1) {
// 				str += "\n";
// 			}

// 		}
// 	}

// console.log(str);


// EXERCISE 
// Create a function that takes in an integer and prints all numbers from 1 to the given integer 
// the number of times equal to the current loop index (ie. 1, 2, 2, 3, 3, 3, ...).
// Alter your answer to exercise 2 to log the numbers in the form of a pyramid.

// var str = "";
// var max = 4;


// for (var i = 0; i < max; i++) {
// 	for (var k = i; k < max; k++) {
// 		str += "_";
// 	}

// 	for (var j = 0; j != i; j++) {
// 		str +=  i + " ";
// 	}

// 	str += "\n";
// }

// console.log(str);


// Experimenting with .map() and Math.random() functions.
// Generating array of random numbers between 1 - 40, 
// testing if elements can be divided by 5, 
// adding successful elements

// function is_divisable(arr_value) {
// 	if (arr_value % 5 === 0)
// 		return arr_value;
// 	else
// 		return 0;
// }

// 	solved_arr = [];
// 	var my_array = [];
// 	var sum = 0;


// for (var i = 0; i < 20; i++) {
// 	my_array[i] = Math.floor(Math.random() * 40) + 1;
// }

// 	solved_arr = my_array.map(is_divisable);

// for (var i = 0; i < 20; i++) {
// 	sum += solved_arr[i];
// }

// console.log(sum);


// Given a string with uppercase and lowercase characters.
// Have to return the indexes of the uppercase characters, 
// using .length(), .push() and toUpperCase() functions, 
// this problem is taken from codewars.com


// var str = "TrYinG";
// matchArray = [];

// for (var i = 0; i < str.length; i++) {
// 	if (str[i] === str[i].toUpperCase())
// 		matchArray.push(i);
// }

// console.log(matchArray);

// var str = "";

// for (var i = 0; i < 2; i++) {
// 	for (var j = 0; j< 4; j++) {
// 		str += "* ";
// 	}

// 	str += "\n";
// }

// console.log(str);



// TEAM CHALLENGE


/*
	Get the right team:
	---------------------------------------
	You are a technical founder of the best new technology and 
	design company. You need to hire some new team members to
	deal with all the contracts you have been getting.

	You have decided your management team has spent too much
	time dealing with interviewing your applicatants just to
	find out they haven't even taken a BrainStation course and
	therefore don't have the skills needed for the job.

	In order to help out your team, you decided to write an
	awesome JavaScript program that will take in an array
	of applicants and an array of positions. The program will
	then use two functions to find the best applicants for
	your team:

		1. rankApplicants(applicants, positions)
			- Give a person two more attributes. One being 
			  their developer rank and another being their
			  designer rank. For each skill that matches
			  increase their points accordingly.
		2. matchApplicants(applicants)
			- Give each person a new attibute which says either
			  designer or developer to match them to a team.

	NOTE: It may be helpful to write a 3rd function to handle
	the printing of your new ranking program. If you are using
	Sublime Text to write your code, remeber to use debug() 
	instead of console.log() to print your values.
*/

//	Write your code here between the lines:
//	--------------------------------------- 


// var rankApplicants = function rankApplicants(applicants, positions) {

// 	for (var i = 0; i < applicants.length; i++) {

// 		var designScore = 0;
// 		var developerScore = 0;

// 		for (var j = 0; j < applicants[i].skills.length; j++) {
// 			for (var k = 0; k < positions[0].requiredSkills.length; k++) {

// 				if (applicants[i].skills[j] === positions[0].requiredSkills[k]) {
// 					designScore += 10;
// 				}
// 			}
// 		}

// 		for (var m = 0; m < applicants[i].skills.length; m++) {
// 			for (var k = 0; k < positions[1].requiredSkills.length; k++) {

// 				if (applicants[i].skills[m] === positions[1].requiredSkills[k]) {
// 					developerScore += 10;
// 				}
// 			}
// 		}
	
// 		applicants[i].designRank = designScore;
// 		applicants[i].developerRank = developerScore;
// 	}

// 	return applicants;

// }

// var matchApplicants = function(applicants) {
	
// 	for (var i = 0; i < applicants.length; i++) {
// 		if (applicants.designRank > applicants.developerRank) {
// 			applicants[i].team = 'design';
// 		}
// 		else {
// 			applicants[i].team = 'developer';
// 		}
// 	}

// 	return applicants;

// }

// var applicants = getApplicants();
// var positions = getPositions();

// var rankedApplicants = rankApplicants(applicants, positions);
// var matchedApplicants = matchApplicants(rankedApplicants);

// console.log(matchedApplicants);

// var a = [1, 2, 3, 4, 5, 6];
// var b = [2, 4, 7, 8, 9, 3];

// for (var i = 0; i < 6; i++) {
// 	for (var j = 0; j < 6; j++) {
// 		if (a[i] === b[j]) {
// 			console.log('match found with ' + a[i]);
// 		}
// 	}
// }




//  ---------------------------------------


// 	Provided Code:
// 	---------------------------------------

// 	Returns an array of person objects.
// function getApplicants() {
// 	var person1 = {
// 		"name" : "Bill Riley",
// 		"DOB" : "August 4, 1991",
// 		"address" : "123 Street Road",
// 		"skills" : ["HTML", "CSS", "Illustrator", "Published"] 
// 	};

// 	var person2 = {
// 		"name" : "Jess Jillenger",
// 		"DOB" : "June 21, 1988",
// 		"address" : "456 Fake Road",
// 		"skills" : ["HTML", "PhotoShop", "CSS", "Ruby on Rails"]
// 	};

// 	var person3 = {
// 		"name" : "Rebecca Simmons",
// 		"DOB" : "December 1, 1994",
// 		"address" : "1324 West Street",
// 		"skills" : ["HTML", "PhotoShop", "CSS", "JavaScript", "Angular"]
// 	};

// 	var person4 = {
// 		"name" : "Jim Matthews",
// 		"DOB" : "January 14, 1990",
// 		"address" : "1324 East Street",
// 		"skills" : ["HTML", "PhotoShop", "CSS", "Cognitive Psychology", "Published", "UI/UX"]
// 	};

// 	var person5 = {
// 		"name" : "Samantha Monico",
// 		"DOB" : "February 7, 1990",
// 		"address" : "1992 Johnson Street",
// 		"skills" : ["HTML", "CSS", "Cognitive Psychology", "UI/UX", "PhotoShop"]
// 	};

// 	var person6 = {
// 		"name" : "Cindy Liu",
// 		"DOB" : "May 7, 1979",
// 		"address" : "18 Marr Road",
// 		"skills" : ["HTML", "CSS", "Published", "Angular", "JavaScript", "Node"]
// 	};

// 	return [person1, person2, person3, person4, person5, person6];
// };

// //	Returns an array of position objects.
// function getPositions() {
// 	var designTeam = {
// 		"teamName" : "Creative Team",
// 		"requiredSkills" : ["PhotoShop", "UI/UX", "Illustrator", "Cognitive Psychology", "Published"]
// 	};

// 	var devTeam = {
// 		"teamName" : "Dev Team",
// 		"requiredSkills" : ["HTML", "CSS", "JavaScript", "Angular", "Ruby on Rails", "Node"]
// 	};

// 	return [designTeam, devTeam];
// };

/*
	Battle of the Century
	---------------------------------------
	The time has come for the most anticipated boxing match of
	the 21st century. 

	Fat Ronald vs Skinny Joe!

	Fat Ronald hits like a truck, but he has little in the way of speed
	and accuracy.

	Skinny Joe doesn't have much meat on his bones, but his boxing
	skills are top notch and he can get in and out quickly.

	== INSTRUCTIONS ==
	Design a game that allows Fat Ronald and Skinny Joe to duke it out!

	Fat Ronald lands his punches 25% of the time, but he hits for 2 HP
	Skinny Joe lands his punches 50% of the time, but he hits for 1 HP

	Once one of their HP's reaches 0 you should stop the game a declare a winner!

	Be sure to add some fun commentary when they land a punch or miss.

	== HINT == 
	getRandom returns a random number between the min and max inclusive.
	so for getRandom(1, 2) it could return either a 1 or a 2
*/

// var joeHP = 4;
// var ronaldHP = 4;
// var game = true;

// function getRandom() {
// 	return Math.random();
// }


// function fight() {
// 	// Joe Punches
// 	console.log("Joe Throws a Jab...");
// 	if (getRandom() <= 0.25);
	
// 	// Ronald Punches
// 	console.log("Here comes Fat Ronald...");
	
// 	// Round Recap
// 	console.log("After that round Joe's HP is at " + joeHP + " and Ronald's is at " + ronaldHP + "\n")

// 	// Keep the loop going
// 	if (joeHP < 1 || ronaldHP < 1) {
// 		(joeHP < 1) ? console.log("IT'S OVER, Fat Ronald Takes it!! WHAT A MATCH") : console.log("IT'S OVER, Fat Ronald Takes it!! WHAT A MATCH");
// 		return false;
// 	}
// 	else {
// 	return true;
// 	}
// }

// var gameLoop = setInterval(function () {
// 	if (!fight()) {
// 		clearInterval(gameLoop); // clears the interval and stops the game
// 	}
// }, 1000); //pauses the loop for 1 second and then reruns






