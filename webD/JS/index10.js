// PRIMITIVE DATA TYPES
console.log("------ Primitive Values ------");
let name = "Mayank";
let age = 21;
let isRunning = true;

console.log(name);       // Mayank
console.log(age);        // 21
console.log(isRunning);  // true

// Value Copying (Primitive)
let num1 = 13;
let newNum = num1;

num1 = 20;

console.log("num1:", num1);       // 20
console.log("newNum:", newNum);   // 13

// REFERENCE DATA TYPES
console.log("\n------ Reference Objects ------");

let person1 = {
  name: "Mayank",
  age: 21,
  isRunning: true
};

let person2 = person1; // Copy reference
person2.name = "Aditya";

console.log("person1.name:", person1.name); // Aditya
console.log("person2.name:", person2.name); // Aditya

// Dynamic Object Changes
let person = {
  firstName: "Mayank",
  age: 21,
  isRunning: true
};

person.lastName = "Pandey";  // Add
delete person.isRunning;     // Delete
person.age = 22;             // Update

console.log("\nUpdated person object:");
console.log(person);

/*
Expected Output:
------ Primitive Values ------
Mayank
21
true
num1: 20
newNum: 13

------ Reference Objects ------
person1.name: Aditya
person2.name: Aditya

Updated person object:
{ firstName: 'Mayank', age: 22, lastName: 'Pandey' }
*/
