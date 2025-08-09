/*

Return an array of people with overdue books

Step 1. Get the values from inside the object
Step 2. Using Object.entries(patrons).filter, filter out the dates that are less than today
Step 3. Push the keys associated with the overdue books into an array

Get rid of the dashes between the dates and turn it into a number from a string

?? how to get rid of dashes


*/

const patrons = {
  alice: ["2025-08-01", "2025-08-15"],
  bob: ["2025-08-10"],
  carol: ["2025-08-20"],
};

const today = "2025-08-12";

const overdueBooks = (people, todayDate) => {
  let overduePatrons = [];
  const todayToNumber = Number(todayDate.replaceAll("-", ""));
  for (const personName in people) {
    const updatedValue = people[personName].map((dueDate) =>
      Number(dueDate.replaceAll("-", ""))
    );
    people[personName] = updatedValue;
  }

  for (const personName in people) {
    console.log(people[personName]);
    if (people[personName].some((dueDate) => dueDate < todayToNumber)) {
      overduePatrons.push(personName);
    }
  }
  return overduePatrons;
};

console.log(overdueBooks(patrons, today));
