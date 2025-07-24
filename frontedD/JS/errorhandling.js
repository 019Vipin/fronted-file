console.log("\n--- Runtime Error ---");
try {
    console.log(x);
} catch (err) {
    console.log("Caught runtime ReferenceError:");
    console.log("Error:", err.message);
}

console.log("\n--- Try-Catch-Finally Block ---");
try {    
    console.log("try block starts here");
    console.log(y);
    console.log("try block ends here");
}
catch (err) {
    console.log("I AM INSIDE CATCH BLOCK");
    console.log("Your error is here: ", err.message);
}
finally {
    console.log("I will run every time, as I am finally block");
}

console.log("\n--- Custom Error Throwing ---");
try {
    console.log(z);
}
catch (err) {
    throw new Error("Bhai pehle declare kro, fer print karna");
}

let errorCode = 100;
if (errorCode === 100) {
    throw new Error("Invalid Json");
}
