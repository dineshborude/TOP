
const arr = ['Jazz', 'Blues'];

arr.push("Rock-n-Roll")


let center = Math.floor(arr.length/2);

arr.splice(center, 1, "Classics");

arr.shift()

arr.unshift('Rap','Reggae');

console.log(`${arr}, length : ${arr.length}, center : ${center}`);