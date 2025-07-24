// Original source object
let src = {
    age: 12,
    wt: 68,
    ht: 180
};

// 1. Cloning using iteration
let dest1 = {};
for (let key in src) {
    let newKey = key;
    let newValue = src[key];
    dest1[newKey] = newValue;
}

src.age = 90;

console.log("After cloning with loop:");
console.log("src: ", src);
console.log("dest1: ", dest1);

// 2. Cloning using Object.assign
let src2 = {
    value: 101,
    name: "Love babbar"
};

let dest2 = Object.assign({}, src, src2);

src.age = 100; // modify again

console.log("\nAfter cloning with Object.assign:");
console.log("src: ", src);
console.log("dest2: ", dest2);

// 3. Cloning using spread operator
let dest3 = { ...src };

src.age = 110; // modify again

console.log("\nAfter cloning with spread operator:");
console.log("src: ", src);
console.log("dest3: ", dest3);

// 4. Modify and print another object
let obj = { brand: "Tesla" };

console.log("\nOriginal obj:");
console.log(obj);

obj.color = "White";

console.log("Modified obj:");
console.log(obj);
