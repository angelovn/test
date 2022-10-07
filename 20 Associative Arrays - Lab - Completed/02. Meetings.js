function meeting(arr) {
  let meeting = {};
  for (let days of arr) {
    let [weekDay, name] = days.split(" ");
    if (meeting.hasOwnProperty(weekDay)) {
      console.log(`Conflict on ${weekDay}!`);
    } else {
      console.log(`Scheduled for ${weekDay}`);
      meeting[weekDay] = name;
    }
  }
  for (let keys in meeting) {
    console.log(`${keys} -> ${meeting[keys]}`);
  }
}
meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
