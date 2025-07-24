// 1. Function Declaration
function greet1(name) {
  return `Hello, ${name}!`;
}
console.log(greet1("John")); // Output: Hello, John!

// 2. Function Expression
const greet2 = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet2("John")); // Output: Hello, John!

// 3. Arrow Function
const greet3 = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet3("John")); // Output: Hello, John!

// 4. Callback Function
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched successfully";
    callback(data);
  }, 2000);
}
function processData(data) {
  console.log(`Processing data: ${data}`);
}
fetchData(processData); // Output after 2s: Processing data: Data fetched successfully

// 5. Returning a Function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // Output: 10

// 6. Built-in Function Example
setTimeout(() => {
  console.log("Delayed function");
}, 1000); // Output after 1s: Delayed function
