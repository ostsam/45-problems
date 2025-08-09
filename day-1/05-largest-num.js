const nums1 = [1, 19, 58, 9, 22, 43, 43534];

const largest = (arr) => {
  const sorted = arr.sort((a, b) => b - a);
  return sorted[0];
};

console.log(largest(nums1));
