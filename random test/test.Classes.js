// ? JavaScript Classes
//? Template for creating OBJECTS. It's like a blue print with which you can make as many different as you want.
//? An object created by the class pattern is called an INSTANCE of that class
//? A class has a constructor - method called automatically to create an OBJECT. It prepares the new object for use and it can receive parameters and assign them to properties
//? Ex:

//? Student Template for the new Objects
class Student {
  //? Constructor is a special method for creating and initializing an object
  //? THIS keyword is used to set a property of the object to a given value. It points to the OBJECT we called the METHOD
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  sayHi() {
    console.log(`${this.name} say hi!`);
  }
}
//? New instance of the class
let peter = new Student("peter", 6); //? Use NEW to invoke the constructor of the class
console.log(peter);
peter.sayHi();
//? the objects know that their parent is the Class Student we can check if an object is an instance of a class

//? Getters and Setters
//? Getter is basically a property that behaves like a function
//? getters => access properties
//? setters change (mutate) them

class Person {
  constructor(personName, personAge) {
    //? this.something is the Key and = something is the value
    this.name = personName;
    this.lastName = personAge;
  }
  hello() {
    console.log("Hello");
  }
}
let persons = new Person("Johan", 23);
console.log(persons);
