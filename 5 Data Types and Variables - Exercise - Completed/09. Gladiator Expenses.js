function gladiator(
  lostFights,
  helmetPrice,
  swordPrice,
  ShieldPrice,
  ArmorPrice
) {
  let brokenHelmet = 0;
  let brokenShield = 0;
  let brokenArmor = 0;
  let brokenSword = 0;
  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) {
      brokenHelmet++;
    }
    if (i % 3 === 0) {
      brokenSword++;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      brokenShield++;
    }
    if (i % 12 === 0) {
      brokenArmor++;
    }
  }
  let sum =
    brokenHelmet * helmetPrice +
    brokenSword * swordPrice +
    brokenShield * ShieldPrice +
    brokenArmor * ArmorPrice;
  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiator(
  23,

  12.5,

  21.5,

  40,

  200
);
