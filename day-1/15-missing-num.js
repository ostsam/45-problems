/*

You are passing in an array of numbers starting at 1. There will always be a missing
number in the array. Return the missing number.

Edge cases:
Array is less than two numbers long


*/

const nums = [3, 2, 1, 6, 5, 4, 7, 9, 11, 8];
const nums2 = [1, 3, 4];

/*

[1,3,4]
   i

 i = 1
 nums[i] = 3


*/

const missingNum = (arr) => {
  //if (arr.length < 2) return "No missing numbers";
  const ordered = arr.sort((a, b) => b - a);
  for (let i = 0; i < ordered.length; i++) {
    //if the i of an element of an array is not equal to arr[i] then return i
    if (ordered[i] !== i + 1) return i + 1;
  }
};

//console.log(missingNum(nums));

// Initialize a object
const missingNum2 = (arr) => {
  // { 1: 0, 2: 1, 3: 2, 4: 3, 6: 4}
  let indexMap = {};
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    indexMap[currentValue] = i; // indexMap[1] = 0
  }
  // Count up from 1 to 10
  for (let count = 1; count <= arr.length + 1; count++) {
    let keyIsMissing = indexMap[count] === undefined;
    if (keyIsMissing) {
      return count;
    }
  }
  throw new Error("bro that's a bad array...");
};
console.log(missingNum2(nums));
