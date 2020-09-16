    //variables
    // let firstName = 'person1'
    // let age = 40

class Person {
    //data member of the class (C++)
    //property of the class (TS)
    //fields of the class (JAVA)
    firtName: string
    age: number
    address: string

      // method
    printInfo() {
    console.log(`first name: ${this.firtName}`)
    console.log(`age: ${this.age}`)
    console.log(`address: ${this.address}`)
  }
}

const p1 = new Person()
p1.firtName = 'sanket'
p1.age = 21
p1.address = 'Latur'

// console.log(p1)
p1.printInfo();


// function Person(firstName, age, address) {
//   this.firstName = firstName
//   this.age = age
//   this.address = address
// }
// const p1 = new Person('person1', 40, 'pune')

