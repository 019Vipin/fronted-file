// =======================
// 📘 1. String Literals
// =======================
let myName = "Mayank Pandey!";
let message = 'JavaScript is a scripting language.';

let firstName = "Mayank";
let lastName = "Pandey";
let fullName = firstName + " " + lastName;

console.log("String Literal - Full Name:", fullName);
// Output: Mayank Pandey


// ==========================
// 📘 2. Template Literals
// ==========================

// Example 1: Interpolation
let number1 = 10;
let number2 = 20;
let sum = number1 + number2;

console.log(`Template Literal - Sum: The sum of ${number1} + ${number2} is equal to ${sum}`);
// Output: The sum of 10 + 20 is equal to 30

// Example 2: Multiline String
let string1 = "Mai pal do pal ka shayar hoon";
let string2 = "Pal do pal meri kahani hai";

let multiLineString = `
Template Literal - Multiline:
    ${string1},
    ${string2}`;

console.log(multiLineString);
/*
Output:
    Mai pal do pal ka shayar hoon,
    Pal do pal meri kahani hai
*/


// =======================
// 📘 3. Object Literals
// =======================
let person = {
    name: 'Mayank',
    age: 21,
    isRunning: true
};

console.log("Object Literal - Person:", person);
// Output: { name: 'Mayank', age: 21, isRunning: true }


// =======================
// 📘 4. Array Literals
// =======================

// Example 1: Array of strings
let colors = ['orange', 'red', 'aqua', 'green', 'blue'];
console.log("Array Literal - Colors:", colors);
// Output: ['orange', 'red', 'aqua', 'green', 'blue']

// Example 2: Mixed data types
let container = [2, "laptop", true, "papers", "watch"];
console.log("Array Literal - Mixed:", container);
// Output: [2, "laptop", true, "papers", "watch"]
