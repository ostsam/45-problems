const palindrome = (str) => {
  const lowercase = str.toLowerCase();
  const reverse = lowercase.split("").reverse().join("");
  if (lowercase !== reverse) return false;
  else return true;
};

console.log(palindrome("Lol"));
