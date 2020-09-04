//sample object
var sample_obj = {
    "name" : "ak",
    "age" : 25,
    "profession":"SAP consultant"
};

//alert(sample_obj["profession"]);
/*
for (sample_values in sample_obj){
    console.log(sample_obj[sample_values]);
}

*/
var sample_array = ["ak",25,"sap consultant"];
/*
for (values in sample_array)
{
    console.log(sample_array[values]);
}
*/

console.log(sample_array[2]);

var name = "ashok";
const pi = 3.14;
//const pi = 2.14;
var name = "kala";
console.log(name);
console.log(pi);

var age = 18;

if(age >= 18)
{
    console.log("he/she is major");
}
else
{
    console.log("he/she is minor");
}

var sample_cars = ["mahindra",["suv","thar","bolero","maximo","kuv"],"tata",["zest","sumo","indica","nano"],"ashok leyland","hyundai",["i10","i20","santro","creta"]];

for(sample_values in sample_cars)
{
    //sample_cars[index value]
    console.log(sample_cars[sample_values]);
}



