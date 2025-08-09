function assert(expected, actual) {
  if (expected != actual) {
    throw new Error(expected + " expected, got " + actual);
  }
}

function detectOverlap(schedule) {
// sort the schedule by start time
  schedule.sort((a, b) => a - b);

// iterate through the sorted schedule
  for (let i = 0; i < schedule.length - 1; i++) {
    
// if first num of i tuple is greater than another second tuple return true (overlap found)
    if (schedule[i][1] > schedule[i + 1][0]) {
      return true;
    }
  }
// else return false
  return false
}

// example 1
const meetings1 = [
  [60, 120], // 1:00–2:00
  [130, 180], // 2:10–3:00
  [115, 150], // 1:55–2:30
];
assert(true, detectOverlap(meetings1));

// example 2
const meetings2 = [
  [60, 120], // 1:00–2:00
  [121, 180], // 2:01–3:00
  [200, 250], // 3:20–4:10
];
assert(false, detectOverlap(meetings2));

// example 3
const meetings3 = [
  [60, 120],
  [120, 150],
];
assert(false, detectOverlap(meetings3));

const meetings4 = [
  [200, 240],
  [60, 120],
  [110, 130],
];
assert(true, detectOverlap(meetings4));

const meetings5 = [
  [90, 150],
  [90, 150],
];
assert(true, detectOverlap(meetings5));

const meetings6 = [
  [0, 30],
  [30, 60],
  [90, 150],
  [149, 200],
];
assert(true, detectOverlap(meetings6));

console.log(detectOverlap(meetings4))