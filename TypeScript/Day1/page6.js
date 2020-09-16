function fun1() {
    //array of numbers
    var numbers = [10, 20, 30, 40, 50];
    numbers.push(60);
    console.log(numbers);
}
// fun1();
function function2() {
    // array of numbers
    // const numbers: number[] = [1, 2, 3, 4, 5]
    var numbers = [1, 2, 3, 4, 5];
    numbers.push(20);
    for (var index = 0; index < numbers.length; index++) {
        var number = numbers[index];
        console.log("square of " + number + " = " + number * number);
    }
}
//   function2()
function function3() {
    // implicit
    // const countries = ['india', 'usa']
    // explicit
    // const countries: string[] = ['india', 'usa']
    var countries = ['india', 'usa'];
    console.log(countries);
}
//   function3();
function function4() {
    // const myArray: any[] = [10, 20, true, false, {namme: "test"}]
    var myArray = [10, 20, true, false, { namme: "test" }];
    console.log(myArray);
}
function4();


