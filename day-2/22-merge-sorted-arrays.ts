/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const left = nums1.slice(0, m);
  const right = nums2.slice(0, n);

  nums1.length = 0;
  nums1.push(...left, ...right);
  nums1.sort((a, b) => a - b);
}
