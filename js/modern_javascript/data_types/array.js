/*
* pop => Extracts the last element of the array and returns it:
* push => Append the element to the end of the array:
* shift => Extracts the first element of the array and returns it:
* unshift => Add the element to the beginning of the array:
* Methods push and unshift can add multiple elements at once:
* copy by reference let fruits = ["apple","orange"]  let arr = fruits
* push and pop are faster than shift and unshift(because when you remove an item from the start other items is to be re-numbered)
/******************FOR LOOPS ON ARRAYS ******************************
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

* If the array is truncated the process is irreverible
/*

/*

QUESTION 1

Array operations.
importance: 5
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
*/

const { readlink } = require("fs");

//
let styles = ["Jazz","Blues"];
console.log(styles);
//
styles.push("Rock-n-Roll");
console.log(styles);

//
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Rap","Reggage");
console.log(styles);

/*

QUESTION 2

Sum input numbers
importance: 4
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter some numbers', nums => {
      alpha = '/^[A-Za-z\s]+$/'
      if(num ==='' || num === alpha) return 
    readline.close();
  });


function sumInput(){

}
