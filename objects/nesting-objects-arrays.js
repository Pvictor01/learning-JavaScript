//Aninhando objetos e arrays
let objectSpaceship = {//array dentro de objeto
  name: 'Space',
  type: 'Battle',
  crew: ['Cap. Victor', 'Maria', 'João']
};

objectSpaceship.crew.push('pv');

console.log(objectSpaceship);

let arraySpaceship = [ //objetos dentro de array
  { name: 'Element', crewQuantity: 14},
  { name: 'Colossus', crewQuantity: 10},
  { name: 'Helmet', crewQuantity: 21},
];

arraySpaceship.forEach((element) => {
  alert(element.name + ' tem ' + element.crewQuantity + ' tripulantes');
});

let spaceship = { //Objeto dentro de objeto
  name: 'Golias',
  maxCrew: 30,
  captain: {
    name: 'Paulo',
    age: 21
  }
};

console.log(spaceship.captain.name);