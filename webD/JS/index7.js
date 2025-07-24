// =====================
// 🎯 JavaScript Arrays: Full Demo
// =====================


// 🔹 1. Array Creation

// Using Array Literal
const numbersLiteral = [1, 2, 3, 4, 5];
const fruitsLiteral = ['apple', 'banana', 'orange'];
const mixedLiteral = [1, 'apple', true, { name: 'John' }];

console.log("Array Literal:", numbersLiteral, fruitsLiteral, mixedLiteral);

// Using Array Constructor
const numbersConstructor = new Array(10, 20, 30);
const fruitsConstructor = new Array('mango', 'pineapple');
const emptyArray = new Array();

console.log("Array Constructor:", numbersConstructor, fruitsConstructor, emptyArray);


// 🔹 2. Accessing Array Elements
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log("First fruit:", fruits[0]);                      // apple
console.log("Third fruit:", fruits[2]);                      // orange
console.log("Last fruit:", fruits[fruits.length - 1]);       // kiwi

const index = 1;
console.log("Fruit at index", index + ":", fruits[index]);   // banana


// 🔹 3. Inserting Elements into Array

// Using push (Insert at End)
fruits.push('papaya', 'pear');
console.log("After push:", fruits);

// Using unshift (Insert at Start)
fruits.unshift('lemon', 'guava');
console.log("After unshift:", fruits);

// Using splice (Insert at Specific Index)
fruits.splice(3, 0, 'watermelon'); // Insert at index 3 without deleting
console.log("After splice at index 3:", fruits);


// 🔹 4. Filter Method Examples

// Example 1: Filter positive numbers
const nums = [-10, 0, 25, 14, -5, 9];
const positives = nums.filter(num => num > 0);
console.log("Positive Numbers:", positives);  // [25, 14, 9]

// Example 2: Filter Array of Objects
const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 30 },
];
const expensiveProducts = products.filter(p => p.price > 15);
console.log("Expensive Products:", expensiveProducts);

// Example 3: Filter long words
const words = ["apple", "banana", "orange", "grapefruit"];
const longWords = words.filter(word => word.length > 6);
console.log("Long Words:", longWords); // ["banana", "grapefruit"]


// 🔹 5. Reduce Method Example

// Sum of Array Elements
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log("Sum using reduce:", total); // 15


// 🔹 6. Bonus: Chained Filter + Reduce
const priceList = [200, 150, 50, 400, 90, 300];
const highPrices = priceList
  .filter(price => price > 100)
  .reduce((sum, price) => sum + price, 0);

console.log("Total of prices > 100:", highPrices); // 200 + 150 + 400 + 300 = 1050
