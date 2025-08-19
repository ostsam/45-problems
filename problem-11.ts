// implement a simple calculator that supports +, -, /, and * on exactly two numbers.
// Your input will be a string, like "4 * 8" or "66 / 33".
// You don't need to do any validation on the input; assume all operators and numbers are separated by a string.
// Next: implement multiple operations, evaluated left-to-right. e.g "3 - 1 - 1" is 1. "5 * 2 * 2" is 20.
// Next: implement parentheses. "3 - 1 - 1" is 1, but "3 - (1 - 1)" is 3. "4 - (6 - (1 - 1))" is -2.

function calc(arg: string): number | null {
    let split = arg.split(" ")
    let operator = split[1]
    let Num1 = Number(split[0])
    let Num2 = Number(split[2])
    if (operator == "+") {
        return Num1 + Num2;
    } else if (operator == "-") {
        return Num1 - Num2
    } else if (operator == "*") {
        return Num1 * Num2
    } else if (operator == "/") {
        return Num1 / Num2
    } else return null
    }

function assert(expected, actual) {
  if (expected !== actual) {
    console.log(
      "Test case failed! Expected",
      expected,
      "but you returned",
      actual
    );
  }
}

assert(20, calc("5 * 4"));
assert(2, calc("66 / 33"));
assert(1, calc("2 - 1"));
assert(50, calc("50 + 0"));
