class Capitain {
  constructor(name, age, flightHours) {
    this.name = name
    this.age = age
    this.flightHours = flightHours
  };
};

class Spaceship {
  constructor(name, crewQuantity, capitainName, capitainAge, capitainFlightHours) {
    this.name = name
    this.crewQuantity = crewQuantity
    this.capitain = new Capitain(capitainName, capitainAge, capitainFlightHours)
  };
};

let spaceship = new Spaceship('Tardis', '2', 'Doctor', '800', 'Infinite');

console.log(spaceship);