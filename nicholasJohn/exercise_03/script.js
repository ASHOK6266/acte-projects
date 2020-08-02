var greetings = "hello ";
var name = "world";

alert(greetings + name);

var res1 = greetings + name;
var regExpSearch = /lo/g;
var replaceWith = 'XY';

var res2 = res1.replace(regExpSearch,replaceWith);

console.log(res2);
