// ----- For Loop Example -----
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ----- While Loop Example -----
console.log("\nWhile Loop:");
let sumWhile = 0;
let i = 1;
while (i <= 10) {
    sumWhile += i;
    i++;
}
console.log("Sum:", sumWhile);

// ----- Do-While Loop Example -----
console.log("\nDo-While Loop:");
let sumDo = 0;
let count = 1;
do {
    sumDo += count;
    count++;
} while (count <= 10);
console.log("Sum:", sumDo);

// ----- forEach Loop Examples -----
let numbers = [1, 2, 3, 4, 5, 6, 7];

console.log("\nforEach Loop - Index and Value:");
numbers.forEach(function(number, index) {
    console.log(`Element at ${index}: ${number}`);
});

console.log("\nforEach Loop - Sum of Array:");
let sumForEach = 0;
numbers.forEach(function(num) {
    sumForEach += num;
});
console.log("Sum:", sumForEach);

console.log("\nforEach Loop - Fruits:");
let fruits = ['Apple', 'Banana', 'Grapes', 'Chiku'];
fruits.forEach(function(fruit) {
    console.log(`I love ${fruit}`);
});

// ----- for...of Loop Examples -----
console.log("\nfor...of Loop - Colors:");
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}

console.log("\nfor...of Loop - Sum of Numbers:");
let sumForOf = 0;
for (let value of numbers) {
  sumForOf += value;
}
console.log("Sum:", sumForOf);

// ----- for...in Loop Examples -----
console.log("\nfor...in Loop - Object Properties:");
const person = {
  name: 'Mayank',
  age: 21,
  city: 'Delhi'
};
for (const key in person) {
  console.log(key + ": " + person[key]);
}

console.log("\nfor...in Loop - Array Indexes (not preferred):");
const moreFruits = ['apple', 'banana', 'orange'];
for (let index in moreFruits) {
  console.log(`Index ${index}: ${moreFruits[index]}`);
}
