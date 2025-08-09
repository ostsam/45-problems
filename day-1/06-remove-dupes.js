const arr = [
  1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6,
  6,
];

const removeDupes = (nums) => {
  const unique = new Map();
  let value = 0;
  for (num of nums) {
    if (!unique.has(num)) {
      unique.set(num, value++);
    }
  }
  return unique;
};

console.log(removeDupes(arr));
