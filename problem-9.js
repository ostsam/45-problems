// given events as minutes-from-midnight and now (same units), return the title of the soonest event with
// start ≥ now; if none, return null.

const events = [
  { title: "standup", start: 540 }, // 9:00
  { title: "happy hour", start: 1100 },
  { title: "1:1", start: 600 }, // 10:00
  { title: "retro", start: 900 }, // 15:00
];

const now = 601;
const soonestEvent = (eventArr, now) => {
  const sorted = eventArr.sort((a, b) => a.start - b.start);
  for (let event of sorted) {
    if (now <= event.start) return event.title;
  }
};

console.log(soonestEvent(events, now));
