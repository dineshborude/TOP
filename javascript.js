// console.log('Hello JS');

const pi = 3.14;


// console.log(pi); // What will be output?

// console.log((3 + 2) - 76 * (1 + 1));

function capatalize(str) {
            str = str.toLowerCase();
            return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capatalize("dinesH"));

function lastLetter(str) {
    return str.slice(-1);
}

console.log(lastLetter("abcd"))

  let namea = prompt("What's your name?");
                console.log("Hello, " + namea+ "!");