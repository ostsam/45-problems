const factorial = (num) => {
  if (num < 1) return "Invalid number";
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};

console.log(factorial(5));