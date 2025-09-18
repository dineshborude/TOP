const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter Number To FizzBuzz..', number => {
  console.log(`You Will Get FizzBuzz Of ${number}!`);

  for(let i = 1; i <= number; i++) {

    if(number%11 == 0) {
        console.log("FIZZ");
    } else{
        console.log("FiZzBuzZ")
    }


  }



  readline.close();
});
