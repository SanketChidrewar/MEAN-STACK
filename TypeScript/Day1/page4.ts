let num : number = 100 //explicit type declaration
console.log(`num = ${num}, type = ${typeof(num)}`)

//ok 
num = 100

//not ok
//num = 'sank' //can't assign string type variable to number type variable

// string
const firstName: string = "steve"
console.log(`firstName = ${firstName}, type = ${typeof(firstName)}`)

// string
const lastName: string = 'Jobs'
console.log(`lastName = ${lastName}, type = ${typeof(lastName)}`)

// string
const address: string = `
  address line,
  city,
  state
`
console.log(`address = ${address}, type = ${typeof(address)}`)

// boolean
const canVote: boolean = false
console.log(`canVote = ${canVote}, type = ${typeof(canVote)}`)

// undefined
let myVar: undefined
console.log(`myVar = ${myVar}, type = ${typeof(myVar)}`)

//object 
const person: {name: string, age: number, address: string}
    = {name: "person", age: 20, address: "pune"}

console.log(`person = ${person}, type = ${typeof(person)}`)

// object
const mobile: object = {model: "iPhone XS Max"}
console.log(`mobile = ${mobile}, type = ${typeof(mobile)}`)

let result: number | string
//this is telling that result can have number or string type data
result = 100
result = "error"

// let myvar2: number | string | boolean | object | undefined
let myvar2: any
myvar2 = 100
myvar2 = "teset"
myvar2 = true
myvar2 = {name: "test"}
myvar2 = undefined
