function reading(currentBookPages, pagersPerHour, readDays) {
  let totalTime = currentBookPages / pagersPerHour;
  let total = totalTime / readDays;
  console.log(total);
}
reading(212, 20, 2);
