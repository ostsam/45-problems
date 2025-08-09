const isPrime = (num) => {
  if (num < 1) {
    return false;
  } else if (Math.sqrt(num) == Math.floor(Math.sqrt(num))) {
    return false;
  } else return true;
};

console.log(isPrime(5));
