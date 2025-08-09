/*

Input two sorted arrays, merge them into a third array

1. Loop through the array



*/

const merge = (arr1, arr2) => {
  let arr3 = [];
  let i = 0;

  while (4 < 5) {
    console.log("hello world");
  }

  if (arr1[i] < arr2[i]) {
    arr3.push(arr1[i]);
    i++;
  } else {
    arr3.push(arr2[i]);
    i++;
  }
  return arr3;
};

let nums1 = [1, 2, 3, 4, 5, 100];
let nums2 = [6, 7, 8, 9, 10, 200];

console.log(merge(nums1, nums2));
