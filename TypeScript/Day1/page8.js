//variables
// let firstName = 'person1'
// let age = 40
var Person = /** @class */ (function () {
    function Person() {
    }
    // method
    Person.prototype.printInfo = function () {
        console.log("first name: " + this.firtName);
        console.log("age: " + this.age);
        console.log("address: " + this.address);
    };
    return Person;
}());
var p1 = new Person();
p1.firtName = 'sanket';
p1.age = 21;
p1.address = 'Latur';
// console.log(p1)
p1.printInfo();
// function Person(firstName, age, address) {
//   this.firstName = firstName
//   this.age = age
//   this.address = address
// }
// const p1 = new Person('person1', 40, 'pune')
