const validEmail = (string) => {
  if (!string.includes("@") || !string.includes(".")) return false;
  else if (string.indexOf("@") > string.indexOf(".")) return false;
};

console.log(validEmail("test@test.com"));
