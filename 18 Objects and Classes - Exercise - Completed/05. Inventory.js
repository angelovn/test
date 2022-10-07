function inventory(arr) {
  let heroes = [];
  for (let heroInfo of arr) {
    let [name, level, items] = heroInfo.split(" / ");

    let currentHero = {
      name: name,
      level: +level,
      items: items,
    };
    heroes.push(currentHero);
  }
  let sortedByLevel = heroes.sort((a, b) => {
    return a.level - b.level;
  });
  heroes.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
