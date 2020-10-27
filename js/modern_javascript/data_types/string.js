/*
* str = "Hello"
* str.length
* str[0]
* str.charAt(0) 
* str[str.length-1]
* String are immutable (can't be changed once declared)
* toLowerCase()
* toUpperCase()
* str[0].toLowerCase()
* str.indexOf(substr, pos) // if pos is given it searches from the particular position
* str.indexOf('ell') //answer will be 1
* str.lastIndexOf(substr, position) // This searches from the end of string
* str.includes()
* str.startsWith()
* str.endsWith()
* str.slice(start,end)// If there is no second argument it goes till end of the string
* str.substring(start [, end])
* str.substr(start [, length])
* str.codePointAt()
* str.indexOf()
*/

/*
 * 
// 1.Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
//ucFirst("john") == "John";

*/

function ucFirst(someString) {
    var res = someString[0].toUpperCase() + someString.slice(1);
    console.log(res);
}

ucFirst("john");

/*
// 2. Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

*/

function checkSpam(someChars) {
    let someCharsMiniscule = someChars.toLowerCase();
    //console.log(someCharsMiniscule);
    let varOne = "viagra"
    let varTwo = "xxxxx"
    if (someCharsMiniscule.includes(varOne) || someCharsMiniscule.includes(varTwo)){
        //console.log("present")
        console.log(true)
    }
    else{
        //console.log("not present")
        console.log(false)
    }
}

checkSpam('buy ViAgRA now')
checkSpam('free xxxxx')
checkSpam("innocent rabbit")

/*

3. Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

*/

function truncate(someTextTruncate,maxlength){
    if(someTextTruncate.length > maxlength){
        let newString = someTextTruncate.substring(0,maxlength) + "..."
        console.log(newString)
    }
    else{
        console.log(someTextTruncate)
    }
}

truncate("What I'd like to tell on this topic is:", 20)

truncate("Hi everyone!", 20)

/*
4. We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
*/

function extractCurrencyValue(str){
    let cost =  str.slice(1)
    console.log(cost)
}

extractCurrencyValue('$120') // true













