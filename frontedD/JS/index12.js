// ----- Example 1: Double Numbers -----
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers); 
// Output: [2, 4, 6, 8, 10]

// ----- Example 2: Add Text to Fruits -----
let fruits = ['grapes', 'orange', 'apple', 'banana'];
let myFruits = fruits.map(fruit => `${fruit} : my fav`);
console.log("Fruits with Custom Text:", myFruits);
/*
[
  'grapes : my fav',
  'orange : my fav',
  'apple : my fav',
  'banana : my fav'
]
*/

// ----- Example 3: Extract Names from Objects -----
const students = [
  { name: 'Mayank', age: 21 },
  { name: 'Love', age: 24 },
  { name: 'Pranay', age: 18 }
];
const names = students.map(student => student.name);
console.log("Student Names:", names);
// Output: [ 'Mayank', 'Love', 'Pranay' ]

// ----- Example 4: Convert Fruits to UPPERCASE -----
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase Fruits:", upperFruits);
// Output: [ 'GRAPES', 'ORANGE', 'APPLE', 'BANANA' ]
