
// Chess board problem

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

// When you have a program that generates this pattern, define a variable size = 8 
// and change the program so that it works for any size, outputting a grid of the given width and height.

var size = 8;

var str = "";
	for (var i = 0; i<size; i++) {
		for (var j = 0; j<size; j++) {
			if (((i + j) % 2) == 0) {
				str += " ";
			}
			else {
				str += "#";
			}

			if (j == size - 1) {
				str += "\n";
			}

		}
	}

console.log(str);


// EXERCISE 
// Create a function that takes in an integer and prints all numbers from 1 to the given integer 
// the number of times equal to the current loop index (ie. 1, 2, 2, 3, 3, 3, ...).
// Alter your answer to exercise 2 to log the numbers in the form of a pyramid.

var str = "";
var max = 4;


for (var i = 0; i < max; i++) {
	for (var k = i; k < max; k++) {
		str += "_";
	}

	for (var j = 0; j != i; j++) {
		str +=  i + " ";
	}

	str += "\n";
}

console.log(str);


// Experimenting with .map() and Math.randon() functions.
// Generating array of random numbers between 1 - 40, 
// testing if elements can be divided by 5, 
// adding successful elements

function is_divisable(arr_value) {
	if (arr_value % 5 === 0)
		return arr_value;
	else
		return 0;
}

var my_array = [];
var sum = 0;


for (var i = 0; i < 20; i++) {
	my_array[i] = Math.floor(Math.random() * 40) + 1;
}

	solved_arr = [];
	solved_arr = my_array.map(is_divisable);

for (var i = 0; i < 20; i++) {
	sum += solved_arr[i];
}

console.log(sum);






