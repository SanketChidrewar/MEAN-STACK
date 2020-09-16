//implicit declaration
function add(p1, p2) {
    console.log("addition = " + (p1 + p2));
}
// add(10, 20); //OK
// add(10, '20'); //Ok 

//explicit declaration
function subtract(p1: number, p2: number){
    console.log(`sub = ${p1 - p2}`)
}

// subtract(20,30) //ok
// subtract(20,'30') //NOT ok

//int square(int num) { return num*num }
function square(num: number) : number {
    return num*num
}

