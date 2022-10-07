function buildWall(arr) {
  //? 30f wall
  //? 1cubic meter = 1900 pesos
  //? 1foot is filled with 195cubic yards of concrete
  let sections = arr.map(Number);
  let dailyConcrete = [];
  let cost = 0;
  let crews = sections.filter((len) => len < 30).length;
  while (crews !== 0) {
    let concreteByAllCrew = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== 30) {
        sections[i]++;
        concreteByAllCrew += 195;
        if (sections[i] == 30) {
          crews--;
        }
      }
    }
    dailyConcrete.push(concreteByAllCrew);
  }
  let reduced = dailyConcrete.reduce((a, b) => {
    return a + b;
  }, 0);
  cost = reduced * 1900;
  console.log(dailyConcrete.join(", "));
  console.log(`${cost} pesos`);
}
buildWall(["21", "25", "28"]);
