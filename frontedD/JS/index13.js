// --- Dynamic Typing ---
let marks = 95;
console.log(typeof marks);  // number

marks = "Namaste dunia";
console.log(typeof marks);  // string

marks = 'a';
console.log(typeof marks);  // string

marks = true;
console.log(typeof marks);  // boolean

// --- Math Object ---
console.log("Math.PI:", Math.PI);
console.log("Abs of -5:", Math.abs(-5));
console.log("Sqrt of 36:", Math.sqrt(36));
console.log("2^3:", Math.pow(2, 3));
console.log("Floor of 2.8:", Math.floor(2.8));
console.log("Ceil of 2.1:", Math.ceil(2.1));
console.log("Round 2.5:", Math.round(2.5));
console.log("Min of 2, -5, 10:", Math.min(2, -5, 10));
console.log("Max of 2, -5, 10:", Math.max(2, -5, 10));
console.log("Random number:", Math.random());
console.log("Sin(π/2):", Math.sin(Math.PI / 2));

// --- Garbage Collection (illustration only) ---
let obj1 = { name: "A" };
let obj2 = { name: "B" };

obj1.ref = obj2;
obj2.ref = obj1;

obj1 = null;
obj2 = null;

// Objects are now unreachable and will be garbage collected.
