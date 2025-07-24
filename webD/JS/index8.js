// --------------------------------------
// 🧱 1. Object Literal
// --------------------------------------
const person = {
  firstName: "Mayank",
  lastName: "Pandey",
  age: 21,
  hobbies: ["reading", "writing", "painting"],
  message: function () {
    console.log("Hi my name is " + this.firstName);
  },
};
person.message();

// --------------------------------------
// 🏗️ 2. Object Using new Object()
// --------------------------------------
const person2 = new Object();
person2.firstName = "Mayank";
person2.lastName = "Pandey";
person2.age = 21;
person2.hobbies = ["reading", "sleeping", "writing"];
console.log(person2);

// --------------------------------------
// 🧬 3. Object.create()
// --------------------------------------
const basePerson = {
  name: "Mayank",
};
const person3 = Object.create(basePerson);
person3.firstName = "Mayank";
person3.lastName = "Pandey";
person3.age = 21;
person3.hobbies = ["reading", "writing", "sleeping"];
console.log(person3);

// --------------------------------------
// 🏭 4. Factory Function
// --------------------------------------
function createPerson(fName, lName, age, hobbies) {
  return {
    firstName: fName,
    lastName: lName,
    age: age,
    hobbies: hobbies,
  };
}
const person4 = createPerson("Love", "Babbar", 24, ["sleeping", "writing", "playing"]);
console.log(person4);

// --------------------------------------
// 🏗️ 5. Constructor Function
// --------------------------------------
function CreatePerson(fName, lName, age) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.hobbies = ["sleeping", "writing", "playing"];
}
const person5 = new CreatePerson("Love", "Babbar", 24);
console.log(person5);

// --------------------------------------
// 🔎 6. Accessing Object Properties
// --------------------------------------
const person6 = {
  name: "Mayank",
  age: 21,
  message: function () {
    console.log("Hellooooooo!");
  },
};
console.log(person6.name); // Dot notation
console.log(person6["age"]); // Bracket notation
person6.message();

// --------------------------------------
// ✏️ 7. Modifying Object Properties
// --------------------------------------
const person7 = {
  firstName: "Mayank",
  age: 21,
};
person7.lastName = "Pandey"; // Add
person7.age = 24;            // Modify
delete person7.age;          // Delete
console.log(person7);

// --------------------------------------
// 📋 8. Cloning Objects
// --------------------------------------
const original = {
  firstName: "Mayank",
  lastName: "Pandey",
  age: 21,
};

// (a) Using for...in
const clone1 = {};
for (let key in original) {
  clone1[key] = original[key];
}
console.log(clone1);

// (b) Using Object.assign()
const clone2 = Object.assign({}, original);
console.log(clone2);

// (c) Using Spread Operator
const clone3 = { ...original };
console.log(clone3);
