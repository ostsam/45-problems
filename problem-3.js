const merge = (arr1, arr2) => {
  let arr3 = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }
  arr3.push(arr2[j])
  return arr3;
};

let nums1 = [1, 2, 3, 4, 5, 100];
let nums2 = [6, 7, 8, 9, 10, 200];

console.log(merge(nums1, nums2));
