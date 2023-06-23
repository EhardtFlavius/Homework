function Highway(vignetteCost) {
  this.vehicleList = [];
  this.vignetteCost = vignetteCost;
}

Highway.prototype.enterHighway = function (vehicle) {
  this.vehicleList.push(vehicle);
  console.log(vehicle.driver.name + " entered the highway.");
  if (vehicle instanceof Car) {
    vehicle.payVignette(this.vignetteCost);
    vehicle.driver.walletMoney -= this.vignetteCost;
  } else if (vehicle instanceof Police) {
    console.log(vehicle.driver.name + " (Police) entered the highway.");
  }

  vehicle.increaseSpeed();

  setTimeout(function () {
    console.log(vehicle.name + " reached its destination.");
  }, 5000);
};
function Vehicle(name, runningSpeed, driver) {
  this.name = name;
  this.runningSpeed = runningSpeed;
  this.driver = driver;
}

Vehicle.prototype.increaseSpeed = function (speed) {
  if (typeof speed === "number" && !isNaN(speed)) {
    this.runningSpeed += speed;
    console.log(
      `${this.name} increased its speed by ${speed} km/h. Current speed is ${this.runningSpeed} km/h.`
    );
  } else {
    console.log("To slow . Please accelerate.");
  }
};

function Bus(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Bus;
Bus.prototype.payVignette = function (cost) {
  console.log(this.driver.name + " paid the vignette fee of $" + cost + ".");
};

function Car(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.payVignette = function (cost) {
  console.log(this.driver.name + " paid the vignette fee of $" + cost + ".");
};
function Truck(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;
Truck.prototype.payVignette = function (cost) {
  console.log(this.driver.name + " paid the vignette fee of $" + cost + ".");
};

function Driver(name, walletMoney) {
  this.name = name;
  this.walletMoney = walletMoney;
}

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

Police.prototype.checkVehicleSpeed = function (vehicle) {
  let vehicleType = vehicle.constructor.name;
  let speedLimit = Police.speedLimitByVehicleType[vehicleType];

  if (vehicle.runningSpeed > speedLimit) {
    let fineAmount = Police.fineByVehicleType[vehicleType];
    console.log(
      `Police found  ${vehicle.name} driven above the speed limit. Police enter the Highway and made the driver pay the Fine amount: ${fineAmount}$`
    );

    vehicle.driver.walletMoney -= fineAmount;
    console.log(
      `After paid fine ${vehicle.driver.name}'s wallet money amount is now ${vehicle.driver.walletMoney}`
    );
  } else {
    return console.log(`${vehicle.name} is driving within the speed limit`);
  }
};

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
