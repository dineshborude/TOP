let arr = [];

// console.log(arr);

let fruits = ["Mango", "banana",["cherry","berry"],["apple"]];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1][1]);

// console.log("---------------------------------------------------------------")

// fruits[2] = "tomato";

// console.log(fruits);

// fruits[2] = "beetroot";

// console.log(fruits);

// console.log("---------------------------------------------------------------")

// console.log(fruits.at(-1));

// console.log("---------------------------------------------------------------")

// console.log(`Fruits in 2nd plate are : ${fruits.at(2)}`);

console.log("---------------------------------------------------------------")

console.log(`Fruits  : ${fruits}`);
console.log("---------------------------------------------------------------")

console.log(`Fruits in 2nd plate are : ${fruits[2]}`);

fruits.shift();

console.log("------------------ ARRAY : SHIFT METHOD ---------------------------------------------")

console.log(`Fruits  : ${fruits}`);


fruits.unshift("pinapple");

console.log("------------------ ARRAY : UNSHIFT METHOD ---------------------------------------------")

console.log(`Fruits  : ${fruits}`);

fruits.push("Orange", "Peach");
fruits.unshift("Mosambi", "Avocado");

console.log("------------------ ARRAY PUSH METHOD ---------------------------------------------")

console.log(`Fruits  : ${fruits}`);
