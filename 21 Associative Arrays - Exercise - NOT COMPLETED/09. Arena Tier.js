function arenaTier(arr) {
  let gladiators = {};
  for (let el of arr) {
    if (el === "Ave Cesar") {
      break;
    }
    if (el.includes("vs")) {
      break;
    }
    let [gladiator, technique, skill] = el.split(" -> ");
    skill = Number(skill);
    if (!gladiators.hasOwnProperty(gladiator)) {
      gladiators[gladiator] = {};
    }
    if (!gladiators[gladiator].hasOwnProperty(technique)) {
      gladiators[gladiator][technique] = skill;
    }
    let prevSkill = gladiators[gladiator][technique];
    if (prevSkill > skill) {
      gladiators[gladiator][technique] = skill;
    }
  }
  let keys = Object.keys(gladiators);
  for (let el in gladiators) {
    console.log(gladiators[el]);
  }
}
arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
