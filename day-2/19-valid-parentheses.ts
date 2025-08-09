const validParentheses = (par: string) => {
  let counter = 0;
  if (par.length % 2 !== 0) return false;
  for (let i = 0; i < par.length; i++) {
    if (par[i] == "(") {
      counter++;
    } else {
      counter--;
    }
    if (counter < 0) {
      return false;
    }
  }
  return counter === 0;
};

console.log(validParentheses("()(("));

const validParentheses2 = (par: string) => {
  let tracker: string[] = [];
  // 2. for loop
  for (let i = 0; i < par.length; i++) {
    const char = par[i];
    // 3. push all opening elements into the tracker
    switch (char) {
      case "]":
        if (tracker.pop() !== "[") {
          return false;
        }
      case "}":
        if (tracker.pop() !== "{") {
        }
        break;
      case ")":
        if (tracker.pop() !== "(") {
        }
        break;
      default:
        tracker.push(char);
        break;
    }
    return tracker.length === 0;
  }
};

console.log(validParentheses2("{}{(}}"));