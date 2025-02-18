const math = require("./libs/math.js");
const readline = require("readline");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInput.question("Choose an operation: add, sub, div, mul\n", (answer) => {
  console.log(
    math[answer](parseInt(process.argv[2]), parseInt(process.argv[3]))
  );
  userInput.close();
});
