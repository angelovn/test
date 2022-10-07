function schoolGrades(arr) {
  let school = new Map();
  for (let line of arr) {
    let tokens = line.split(" ");
    let name = tokens.shift();
    let setOfGrade = tokens;
    if (!school.has(name)) {
      school.set(name, setOfGrade);
    } else {
      let oldSet = school.get(name);
      for (let grade of setOfGrade) {
        oldSet.push(grade);
      }
      school.set(name, oldSet);
    }
  }
  let sortEntries = Array.from(school).sort(([key1], [key2]) => {
    return key1.localeCompare(key2);
  });
  for (let [k, v] of sortEntries) {
    let sumGrade = 0;
    for (let grade of v) {
      sumGrade += Number(grade);
    }
    let avg = sumGrade / v.length;
    console.log(`${k}: ${avg.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
