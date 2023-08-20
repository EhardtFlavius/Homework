// Functia Highway
function Highway(vignetteCost) {
  this.vehicleList = [];
  this.vignetteCost = vignetteCost;
}
// Intrarea pe Autobanda
Highway.prototype.enterHighway = function (vehicle) {
  this.vehicleList.push(vehicle);
  logToContainer(vehicle.driver.name + " entered the highway.");
  if (vehicle instanceof Car) {
    vehicle.payVignette(this.vignetteCost);
    vehicle.driver.walletMoney -= this.vignetteCost;
  } else if (vehicle instanceof Bus || vehicle instanceof Truck) {
    vehicle.payVignette(this.vignetteCost);
  }

  vehicle.increaseSpeed();
  // Timpul pentrecut pina la destinatie a vehicului
  setTimeout(function () {
    console.log(vehicle.name + " reached its destination.");
  }, 5000);
};
// Vehicle function
function Vehicle(name, runningSpeed, driver) {
  this.name = name;
  this.runningSpeed = runningSpeed;
  this.driver = driver;
}
//  increase speed function
Vehicle.prototype.increaseSpeed = function (speed) {
  if (typeof speed === "number" && !isNaN(speed)) {
    this.runningSpeed += speed;
    logToContainer(
      `${this.name} increased its speed by ${speed} km/h. Current speed is ${this.runningSpeed} km/h.`
    );
  } else {
    logToContainer("To slow . Please accelerate.");
  }
};
// Bus Function
function Bus(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Bus;
Bus.prototype.payVignette = function (cost) {
  logToContainer(this.driver.name + " paid the vignette fee of $" + cost + ".");
};
//  Car class
function Car(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.payVignette = function (cost) {
  logToContainer(this.driver.name + " paid the vignette fee of $" + cost + ".");
};

// Truck class
function Truck(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;
Truck.prototype.payVignette = function (cost) {
  logToContainer(this.driver.name + " paid the vignette fee of $" + cost + ".");
};
// Driver Class
function Driver(name, walletMoney) {
  this.name = name;
  this.walletMoney = walletMoney;
}

// Police Class
function Police(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

Police.prototype = Object.create(Vehicle.prototype);
Police.prototype.constructor = Police;

Police.speedLimitByVehicleType = {
  Bus: 70,
  Car: 120,
  Truck: 80,
};

Police.fineByVehicleType = {
  Bus: 200,
  Car: 150,
  Truck: 250,
};

// Functia de verificat viteza a politiei
Police.prototype.checkVehicleSpeed = function (vehicle) {
  let vehicleType = vehicle.constructor.name;
  let speedLimit = Police.speedLimitByVehicleType[vehicleType];

  if (vehicle.runningSpeed > speedLimit) {
    let fineAmount = Police.fineByVehicleType[vehicleType];
    logToContainer(
      `Police found  ${vehicle.name} driven above the speed limit. Police enter the Highway and made the driver pay the Fine amount: ${fineAmount}$`
    );

    vehicle.driver.walletMoney -= fineAmount;
    logToContainer(
      `After paid fine ${vehicle.driver.name}'s wallet money amount is now ${vehicle.driver.walletMoney}`
    );
  } else {
    return logToContainer(`${vehicle.name} is driving within the speed limit`);
  }
};
//  classele Driver si Vehicle
let driver1 = new Driver("Max Prime", 500);
let driver2 = new Driver("Star Scream", 800);
let driver3 = new Driver("Optimus Prime", 1200);

let bus = new Bus("AUTOBUS", 30, driver1);
let car = new Car("BMW", 250, driver2);
let truck = new Truck("TIR", 90, driver3);

let highway = new Highway(10);

highway.enterHighway(bus);
highway.enterHighway(car);
highway.enterHighway(truck);

bus.increaseSpeed(20);
car.increaseSpeed(30);
truck.increaseSpeed(15);

let police = new Police("Officer Funky");

police.checkVehicleSpeed(bus);
police.checkVehicleSpeed(car);
police.checkVehicleSpeed(truck);
logToContainer;
// Functie de a muta console.log in Html
function logToContainer(message) {
  var logContainer = document.getElementById("logContainer");
  logContainer.innerHTML += message + "<br>";
}
