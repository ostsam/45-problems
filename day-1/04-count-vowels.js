const vowelCounter = (str) => {
  let counter = 0;
  const vowels = "aeiou";
  for (const letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++;
    }
  }
  return counter;
};

console.log(vowelCounter("tower"));
