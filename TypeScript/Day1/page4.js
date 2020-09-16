var num = 100; //explicit type declaration
console.log("num = " + num + ", type = " + typeof (num));
//ok 
num = 100;
//not ok
//num = 'sank' //can't assign string type variable to number type variable
// string
var firstName = "steve";
console.log("firstName = " + firstName + ", type = " + typeof (firstName));
// string
var lastName = 'Jobs';
console.log("lastName = " + lastName + ", type = " + typeof (lastName));
// string
var address = "\n  address line,\n  city,\n  state\n";
console.log("address = " + address + ", type = " + typeof (address));
// boolean
var canVote = false;
console.log("canVote = " + canVote + ", type = " + typeof (canVote));
// undefined
var myVar;
console.log("myVar = " + myVar + ", type = " + typeof (myVar));
//object 
var person = { name: "person", age: 20, address: "pune" };
console.log("person = " + person + ", type = " + typeof (person));
