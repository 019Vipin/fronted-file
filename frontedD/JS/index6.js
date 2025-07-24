// 🌟 OBJECTS IN JAVASCRIPT
let person = {
    name: "Mayank",
    age: 21,
    country: "India",
    
    // Method (function inside object)
    message: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Access properties
console.log(person.name);         // Dot notation
console.log(person['name']);      // Bracket notation

// Add a property
person.isSleeping = false;

// Modify a property
person.age = 22;

// Delete a property
delete person.country;

console.log(person);              // Final object after changes
person.message();                 // Method call

// Output:
// Mayank
// Mayank
// { name: 'Mayank', age: 22, isSleeping: false }
// Hello, my name is Mayank



// 🍎 ARRAYS IN JAVASCRIPT
let fruits = ["Apple", "Banana", "Orange"];
let primeNumbers = [3, 5, 7, 11, 13];
let mixedData = [true, "JS", 99];

// Access elements
console.log(fruits[1]);           // Banana
console.log(primeNumbers[0]);     // 3
console.log(mixedData[2]);        // 99

// Add items
fruits.push("Kiwi");              // End
fruits.unshift("Grapes");         // Start
console.log(fruits);              // [ 'Grapes', 'Apple', 'Banana', 'Orange', 'Kiwi' ]

// Remove items
fruits.pop();                     // Removes Kiwi
fruits.shift();                   // Removes Grapes
console.log(fruits);              // [ 'Apple', 'Banana', 'Orange' ]



// 🧠 FUNCTIONS IN JAVASCRIPT

// Named function
function sum(x, y) {
    let result = x + y;
    return result;
}

let output = sum(3, 8);
console.log(output);              // 11

// Anonymous function assigned to a variable
let add = function(x, y) {
    return x + y;
};
console.log(add(4, 6));           // 10

// Anonymous function as a callback
setTimeout(function() {
    console.log("This is an anonymous function called after 1 second.");
}, 1000);
