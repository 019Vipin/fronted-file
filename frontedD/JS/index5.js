// ==========================
// 🧮 Number
// ==========================
let integerNumber = 3;
console.log(typeof(integerNumber));    // number

let floatNumber = 3.14;
console.log(typeof(floatNumber));      // number

let output = integerNumber + floatNumber;
console.log(output);                   // 6.14

let number1 = 13;
let number2 = 10;

let sum = number1 + number2;
console.log("Sum:", sum);              // 23

let product = number1 * number2;
console.log("Product:", product);      // 130

let quotient = number1 / number2;
console.log("Quotient:", quotient);    // 1.3

let strNum = "25";
console.log(typeof(strNum));           // string

let strFloat = "35.63";
console.log(typeof(strFloat));         // string

let parsedInteger = parseInt(strNum);
let parsedFloat = parseFloat(strFloat);

console.log(typeof(parsedInteger));    // number
console.log(typeof(parsedFloat));      // number


// ==========================
// 📝 String
// ==========================
let string1 = "Namaste";
let string2 = 'Namaste';
let string3 = `Namaste`;

console.log(typeof(string1));  // string
console.log(typeof(string2));  // string
console.log(typeof(string3));  // string

// Concatenation using + operator
let item1 = "Mobile";
let item2 = "Charger";
let sentence1 = item1 + " and " + item2 + "!";
console.log(sentence1);  // Mobile and Charger!

// Using Template Literals
let sentence2 = `${item1} and ${item2}!`;
console.log(sentence2);  // Mobile and Charger!

// Length of string
let message = "Hello coders";
let messageLength = message.length;
console.log("Length:", messageLength);  // 12

// toUpperCase() and toLowerCase()
let upper = message.toUpperCase();
console.log(upper);  // HELLO CODERS

let lower = message.toLowerCase();
console.log(lower);  // hello coders

// Substring
let substr1 = message.substring(2, 8);
console.log(substr1);  // llo co

let substr2 = message.substring(3);
console.log(substr2);  // lo coders

// Split
let story = "Once upon a time";
let splitted = story.split(" ");
console.log(splitted);  // [ 'Once', 'upon', 'a', 'time' ]

// Join
let words = ["India", "is", "the", "best"];
let joined1 = words.join(" ");
console.log(joined1);  // India is the best

let joined2 = words.join();
console.log(joined2);  // India,is,the,best


// ==========================
// 🔘 Boolean
// ==========================
let isSleeping = true;
let isRunning = false;

if (isSleeping) {
  console.log("He is sleeping");
} else {
  console.log("He is Running");
}

let x = 10;
let y = 16;
let isGreater = x > y;
console.log("Is x > y:", isGreater);  // false


// ==========================
// ❓ Undefined
// ==========================
let temperature;
console.log(temperature);  // undefined


// ==========================
// 🕳️ Null
// ==========================
let distance = null;
console.log(distance);          // null
console.log(typeof distance);  // object
