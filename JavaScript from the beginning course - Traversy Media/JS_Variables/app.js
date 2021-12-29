// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'steve smith';
// console.log(name);
//
// // Initialise Variable
// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);
//
// // varibales can include letter, numbers, _
// // but cant start with numbers
//
//
// // multi word Variables
// var firstName = 'John'; // camel case
// var first_name = 'sarah'; // underscore

//LET Varible - use this method es6 - global
// let name = 'John Doe';
// console.log(name);
// name = 'steve smith';
// console.log(name);

//
// // Const Varibale - global -
// const name = 'john';
// console.log(name);
// name = 'sarah'; // cant reassign const varibales like this
//
// // const have to assign a value
// const name = 'john';
//
// const name; // cant have undefined variables with const



const person = { // js object
  name: 'john',
  age: 30
}

person.name = 'sarah' //person object varibale can be mutated with new data - just cant be re-assigned

console.log(person);  // calling the varibale object is called "calling an object literal"

const numbers = [1,2,3,4,5]; // const arrays can also be updated the same way as objects
numbers.push(6); // this pushes a 6 index into the array


//The Result
// console.log(numbers); {name: "sarah", age: 30}
// app.js:53 (6) [1, 2, 3, 4, 5, 6]
