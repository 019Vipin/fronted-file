// ======================================
// JavaScript Variable Declarations: var, let, const
// ======================================

/*===========================
 1. var is Function Scoped
===========================*/

function exampleVarScope() {
    var x = 10;
    console.log("Inside function, x:", x); // Output: 10
}
exampleVarScope();
// console.log(x); // Un-commenting will throw: ReferenceError: x is not defined

/*===========================
 2. Reassignment using var
===========================*/

var varX = 10;
console.log("varX initially:", varX); // Output: 10

varX = "Mayank";
console.log("varX after reassignment:", varX); // Output: Mayank

/*===========================
 3. Redefinition using var
===========================*/

var varY = 100;
console.log("varY initially:", varY); // Output: 100

var varY = "Redefined with var";
console.log("varY after redefinition:", varY); // Output: Redefined with var

/*===========================
 4. let is Block Scoped
===========================*/

let letX = 10;
if (true) {
    let letY = 20;
    console.log("letX inside block:", letX); // Output: 10
    console.log("letY inside block:", letY); // Output: 20
}
console.log("letX outside block:", letX); // Output: 10
// console.log(letY); // Un-commenting will throw: ReferenceError: letY is not defined

/*===========================
 5. Reassignment using let
===========================*/

let letZ = 5;
console.log("letZ initially:", letZ); // Output: 5

letZ = "Changed";
console.log("letZ after reassignment:", letZ); // Output: Changed

/*===========================
 6. Redefinition using let
===========================*/

// let letZ = "Trying to redefine"; // Un-commenting will throw: SyntaxError: Identifier 'letZ' has already been declared

/*===========================
 7. const Declaration & Reassignment
===========================*/

const constA = 20;
console.log("constA:", constA); // Output: 20

// constA = 30; // Un-commenting will throw: TypeError: Assignment to constant variable

/*===========================
 8. const Must Be Initialized
===========================*/

// const constB; // Un-commenting will throw: SyntaxError: Missing initializer in const declaration

/*===========================
 9. const with Objects
===========================*/

const person = {
    name: 'Mayank',
    age: 21
};
console.log("Person name (initial):", person.name); // Output: Mayank

// Modifying properties is allowed
person.name = 'Love';
console.log("Person name (modified):", person.name); // Output: Love

// person = {}; // Un-commenting will throw: TypeError: Assignment to constant variable

/*===========================
10. const with Arrays
===========================*/

const numbers = [1, 2, 3];
console.log("Numbers (initial):", numbers); // Output: [1, 2, 3]

// Modifying elements is allowed
numbers.push(4);
console.log("Numbers (after push):", numbers); // Output: [1, 2, 3, 4]

// numbers = []; // Un-commenting will throw: TypeError: Assignment to constant variable
