// ========================================
// JavaScript Operators - Full Example File
// ========================================

/*==============================
  🔢 Arithmetic Operators
==============================*/

let number1 = 25;
let number2 = 36;
let number3 = 56;
let sum = number1 + number2 + number3;
console.log("Addition:", sum); // 117

let diff = number1 - number2;
console.log("Subtraction:", diff); // -11

let prod = number1 * number2;
console.log("Multiplication:", prod); // 900

let x = 5;
let y = 5;
console.log("Exponentiation (x ** 3):", x ** 3); // 125
console.log("Exponentiation (x ** y):", x ** y); // 3125

x = 10;
y = 4;
let division = x / y;
console.log("Division:", division); // 2.5

let modulus = x % y;
console.log("Modulus:", modulus); // 2

x = 10;
y = 4;
x++;
console.log("Post-Increment x:", x); // 11
y--;
console.log("Post-Decrement y:", y); // 3

x = 10;
y = 4;
console.log("Pre-Increment x:", ++x); // 11
console.log("Pre-Decrement y:", --y); // 3
console.log("x after pre-increment:", x); // 11
console.log("y after pre-decrement:", y); // 3

let a = 10;
let b = 4;
console.log("Post-Increment a:", a++); // 10
console.log("Post-Decrement b:", b--); // 4
console.log("a after post-increment:", a); // 11
console.log("b after post-decrement:", b); // 3

/*==============================
  📌 Assignment Operators
==============================*/

let firstName = "Mayank";
let yValue = 4;
console.log("Assigned Name:", firstName); // Mayank
console.log("Assigned yValue:", yValue);  // 4

/*==============================
  🌐 Comparison Operators
==============================*/

let strNum = "10";
let num = 10;
console.log("Type of strNum:", typeof strNum); // string
console.log("Type of num:", typeof num);       // number

console.log("Loose Equality (==):", strNum == num);   // true
console.log("Strict Equality (===):", strNum === num); // false

/*==============================
  🧠 Logical Operators
==============================*/

// AND (&&)
let alert1 = true;
let alert2 = false;
let alert3 = true;

console.log("AND (alert1 && alert2):", alert1 && alert2); // false
console.log("AND (alert2 && alert3):", alert2 && alert3); // false
console.log("AND (alert1 && alert3):", alert1 && alert3); // true

let num1 = 0;
let num2 = 1;
let num3 = 1;

console.log("AND (num1 && num2):", num1 && num2); // 0
console.log("AND (num2 && num3):", num2 && num3); // 1
console.log("AND (num1 && num3):", num1 && num3); // 0

// OR (||)
alert1 = false;
alert2 = false;
alert3 = true;

console.log("OR (alert1 || alert2):", alert1 || alert2); // false
console.log("OR (alert2 || alert3):", alert2 || alert3); // true
console.log("OR (alert1 || alert3):", alert1 || alert3); // true

num1 = 0;
num2 = 1;
num3 = 0;

console.log("OR (num1 || num2):", num1 || num2); // 1
console.log("OR (num2 || num3):", num2 || num3); // 1
console.log("OR (num1 || num3):", num1 || num3); // 0

// NOT (!)
alert1 = false;
let alertUndef;
let alertNaN = NaN;
let mySum = 45;
let gone = false;
let isFirst = true;

console.log("NOT (!alert1):", !alert1);         // true
console.log("NOT (!alertUndef):", !alertUndef); // true
console.log("NOT (!alertNaN):", !alertNaN);     // true
console.log("NOT (!mySum):", !mySum);           // false
console.log("NOT (!gone):", !gone);             // true
console.log("NOT (!isFirst):", !isFirst);       // false

/*==============================
  ⚙️ Bitwise Operators
==============================*/

// Bitwise AND (&)
num1 = 5;  // 0101
num2 = 7;  // 0111
console.log("Bitwise AND (5 & 7):", num1 & num2); // 5

// Bitwise OR (|)
num1 = 5;  // 0101
num2 = 8;  // 1000
console.log("Bitwise OR (5 | 8):", num1 | num2); // 13

// Bitwise NOT (~)
num1 = 5;
num2 = 8;
let num3 = -8;
console.log("Bitwise NOT (~5):", ~num1);   // -6
console.log("Bitwise NOT (~8):", ~num2);   // -9
console.log("Bitwise NOT (~-8):", ~num3);  // 7

// Bitwise XOR (^)
num1 = 5;
num2 = 8;
console.log("Bitwise XOR (5 ^ 8):", num1 ^ num2); // 13

// Left Shift (<<)
num1 = 5;
num2 = 8;
console.log("Left Shift (5 << 3):", num1 << 3); // 40
console.log("Left Shift (8 << 2):", num2 << 2); // 32

// Right Shift (>>)
num1 = 5;
num2 = 8;
console.log("Right Shift (5 >> 3):", num1 >> 3); // 0
console.log("Right Shift (8 >> 2):", num2 >> 2); // 2

/*==============================
  ❓ Ternary Operator
==============================*/

let myAge = 21;
(myAge >= 18) ? console.log("Can Drive") : console.log("Cannot Drive"); // Can Drive
