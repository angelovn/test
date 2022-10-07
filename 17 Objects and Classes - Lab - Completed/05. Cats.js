//? Templates for creating objects
//? Defines structure and behavior
//? An object created by the class pattern is called an instance of that class
//? A class has a constructor – method called automatically to create an object
//? It prepares the new object for use
//? Can receive parameters and assign them to properties
// function cats(catsData) {
//   class Cats {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     meow() {
//       console.log(`${this.name}, age ${this.age} says Meow`);
//     }
//   }
//   let cats = [];
//   for (let catData of catsData) {
//     let token = catData.split(" ");
//     let catName = token[0];
//     let catAge = token[1];
//     let myCat = new Cats(catName, catAge);
//     cats.push(myCat);
//   }
//   for (let myCat of cats) {
//     myCat.meow();
//   }
// }
function cat(catsData) {
  class Cat {
    constructor(catName, age) {
      this.catName = catName;
      this.age = age;
    }
    meow() {
      console.log(`${this.catName}, age ${this.age} says Meow`);
    }
    //? WHY THE CLASS METHOD IS ALSO METHOD OF THE OBJECT
    //* BECAUSE IT IS A BLUE PRINT ???
  }
  for (let el of catsData) {
    let [cats, age] = el.split(" ");
    let cat = new Cat(cats, age);
    cat.meow();
  }
}
cat(["Mellow 2", "Tom 5"]);
console.log("-------------------");
cat(["Candy 1", "Poppy 3", "Nyx 2"]);
