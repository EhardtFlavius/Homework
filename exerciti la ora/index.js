function Cat() {
  Animal.call(this);
}

Cat.prototype = Object.assign(Cat.prototype, Animal.prototype);
Cat.prototype.name = "Miky";
Cat.prototype.talk = function () {
  console.log("Meaw Meaw");
};

var myCat = new Cat();
console.log(myCat);
myCat.talk();

Cat.prototype = Object.assign(Cat.prototype, Animal.prototype);
Cat.prototype.name = "Miky";
Cat.prototype.talk = function () {
  console.log("Meaw Meaw");
};
function Hamster() {
  Animal.call(this);
}

function Hamster() {}
Hamster.prototype = Object.assign(Hamster.prototype, Animal.prototype);
Hamster.prototype.name = "Jack, the hamster";
Hamster.prototype.talk = function () {
  console.log("kits kits");
};
var myHamster = new Hamster();
console.log(myHamster);
myHamster.talk();

// function Person() {}
// Person.prototype.legsNr = 2;
// Person.prototype.armsNr = 2;
// Person.prototype.longHair = "black";
// Person.prototype.brownEyes = "brown";

// function Woman() {
//   Person.call(this);
// }
// Woman.prototype = Object.assign(Woman.prototype, Person.prototype);
// Woman.prototype.name = "Alina";
// Woman.prototype.job = function () {
//   console.log("Police Officer");
// };

// function Man() {
//   Person.call(this);
// }
// Man.prototype = Object.assign(Man.prototype, Person.prototype);
// Man.prototype.name = "Marius";
// Man.prototype.job = function () {
//   console.log("Fire Fighter");
// };

// var myWoman = new Woman();
// console.log(myWoman);
// myWoman.job();
// prototype este un obiect de inglobare sau matrita
// asa se cheama o functie

//  new este pentru  monsteirea de la prainte si este considerat classe
//   prin new transform o functie intri classa

function Animal() {
  Animal.prototype.legsNr = 4;
  Animal.prototype.eyesNr = 2;
  Animal.prototype.earsNr = 2;
}
//  parintele de la care mosteneste plus this
function Cat() {
  Animal.call(this);
}

// Cat.prototype = Object.create(Animal.prototype, Animal.prototype);
// asa se face merge de la target si source

// function Personef() {
//   Personef.prototype.legsNr = 2;
//   Personef.prototype.armsNr = 2;
//   Personef.prototype.longHair = "black";
//   Personef.prototype.brownEyes = "brown";
// }

// function Woman() {
//   Personef.call(this);
// }
// function Woman() {}

//  this este legatura la prototype
//  si metodele si proprietatile si este obiect
function Person() {}
Person.prototype.lastName = "Marius";
function Woman() {
  Person.call(this);
}
function Man(name) {
  this.firstName = name;
  Person.call(this);
}

//  functia general ca Persone   poate sa fie general ca sa tine arms legs etc
//  dar specifica doar pt woman se adaunga in functie direc Woman

function Vehicla() {}
Vehicla.prototype.start = function () {
  this.engine.start();
};
Vehicla.prototype.stop = function () {
  this.engine.stop();
};
Vehicla.prototype.drive = function () {
  this.engine.start();
  console.log("Engine running:", this.engine.isRunning);
};

function Car(name, engine, wheel, wheelNr) {
  this.name = name;
  this.engine = engine;
  this.wheel = wheel;
  this.wheelNr = wheelNr;
  Vehicla.call(this);
}

Car.prototype = Object.assign(Car.prototype, Vehicla.prototype);

function Engine() {}

Engine.prototype.isRunning = false;
Engine.prototype.start = function () {
  this.isRunning = true;
};
Engine.prototype.stop = function () {
  this.isRunning = false;
};

var myEngine = new Engine();
var myToyota = new Car("Toyota", myEngine);
myToyota.drive();
console.log(myToyota);

//   functia este data pentru utilizare la mai multe masini
