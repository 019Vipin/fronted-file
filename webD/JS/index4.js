// ===========================
// 📘 1. if Statement Example
// ===========================

let speed = 87;

if (speed > 90) {
    console.log("if: OverSpeeding");
}

if (speed > 50 && speed <= 90) {
    console.log("if: Normal");
}

if (speed <= 50) {
    console.log("if: Slow");
}
// Output: "if: Normal"


// ================================
// 📘 2. if-else Statement Example
// ================================

let myAge = 15;

if (myAge >= 18) {
    console.log("if-else: I can Drive");
} else {
    console.log("if-else: Cannot Drive");
}
// Output: "if-else: Cannot Drive"


// ======================================
// 📘 3. if-else-if Statement Example
// ======================================

let weight = 65;

if (weight > 70) {
    console.log("if-else-if: You are Overweight");
} else if (weight > 50 && weight <= 70) {
    console.log("if-else-if: You are Fit");
} else {
    console.log("if-else-if: You are Underweight");
}
// Output: "if-else-if: You are Fit"
