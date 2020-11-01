
/******************************QUESTION 1 ****************************************************/


/*

Rewrite the function using '?' or '||'
importance: 4
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||



function checkAge(age){
    console.log(age>18 ? true || confirm('Did parents allow you?'));
}
*/


function checkAge(age){
    console.log(age>18 ? true : 'Did parents allow you?');
}

checkAge(15);

/******************************QUESTION 2 ****************************************************/

/*

Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a,b){
    console.log((a<b)?a:b);
}

min(2, 5) == 2
min(4, 5) == 4
min(3, -1) == -1
min(1, 1) == 1

/*

Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

Run the demo

P.S. In this task the function should support only natural values of n: integers up from 1.

*/

function pow(x,n){
    //(3,5) => 3*3*3*3*3
    console.log(x**n)
}

pow(3, 2);
pow(3, 3);
pow(1, 100);