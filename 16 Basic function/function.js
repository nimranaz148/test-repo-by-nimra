"use strict";
// Define a function called `greet` that takes a parameter `name` and returns a greeting message including the provided `name`. Then, call the `greet` function with the argument "John" and log the result to the console.
function greet(name) {
    let message = "have a nice day! ";
    return ["hello john ", message];
}
let greeting = greet("john");
console.log(greeting);
// ## Function Return Value Question:
// Write a JavaScript function named `calculateArea` that takes two parameters: `length` and `width`, representing the length and width of a rectangle respectively. The function should calculate the area of the rectangle and return the result.
function calculateArea(length = 5, width = 2) {
    return [length * width];
}
let area_of_rectangle = calculateArea();
console.log(area_of_rectangle);
//## Rest Parameter Question
//  Explain the concept of a rest parameter in typescript. write a typeScript function named `friend` that accepts any name of parameters and returns all name in array.
// For example:
// - If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
function friend(...name) {
    console.log(name);
}
let my_friend = friend('taha', 'Ahmed', 'Ali');
console.log(my_friend);
// Explain the concept of a spread operator in typescript. write a typeScript function named `friend` that accepts any name of parameters and returns all name in array.then make a copy of that name and pop last name form array. make sure your orignal array should not be change.
// For example:
// - If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali']
let new_frnd = ['taha', 'Ahmed', 'Ali', 'Asif'];
let a = [...new_frnd];
a.pop();
console.log(a);
console.log(new_frnd);
