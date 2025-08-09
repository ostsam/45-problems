const anagramCheck = (str1, str2) => {
  if (str1.length != str2.length) return false;
  return (
    str1.split("").sort().join("").toLowerCase() ===
    str2.split("").sort().join("").toLowerCase()
  );
};

console.log(anagramCheck("racecar", "carrace"));
