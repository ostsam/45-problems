function compress(chars: string[]): number {
  const length = chars.length;
  let read = 0;
  let write = 0;

  while (read < length) {
    let char = chars[read];
    let count = 0;

    while (read < length && chars[read] === char) {
      read++;
      count++;
    }

    chars[write++] = char;

    if (count > 1) {
      const countString = count.toString();
      for (let letter of countString) {
        chars[write++] = letter;
      }
    }
  }
  return write;
}
