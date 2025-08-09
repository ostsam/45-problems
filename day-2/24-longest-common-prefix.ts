function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  let common = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(common)) {
      common = common.slice(0, -1);
    }
  }
  return common;
}