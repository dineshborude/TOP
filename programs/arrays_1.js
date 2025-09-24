let fruits = []

fruits[9999] = 5;

// console.log(fruits[69]);

fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits);
console.log(`fruits length : ${fruits.length}`);

console.log("------------------ FOR ... OF ---------------------------------------------")

for(let fruit of fruits) {
    console.log(fruit)
}

console.log("------------------ FOR ... IN ---------------------------------------------")

for(let fruit in fruits) {
    console.log(fruits[fruit]);
}