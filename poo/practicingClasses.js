//Recebendo dados de naves espaciais e calculando sua tripulação.
class Spaceship {
  constructor(name, crewQuantity) {
    this.name = name
    this.crewQuantity = crewQuantity
    this.hitched = false
    this.openDoors = false
  };
  hitch() {
    this.hitched = true
    this.openDoors = true
  };
};

function showMenu() {
  let chosenOption;

  while(chosenOption != '1' && chosenOption != '2' && chosenOption != '3') {
    chosenOption = prompt(' ESCOLHA O QUE DESEJA FAZER \n1- Realizar engate \n2- Imprimir naves \n3- Sair do programa');
  };

  return chosenOption;
};

function shipData() {
  let spaceshipName = prompt('Digite o nome da nave');
  let crewSpaceship = Number(prompt('Digite a quantidade de tripulantes'));

  let spaceship = new Spaceship(spaceshipName, crewSpaceship);

  return spaceship;
};

function printShips(spaceships) {
  let spaceshipList = '';

  spaceships.forEach((spaceship, index) => {
      spaceshipList += (index + 1) + "- " + spaceship.name +
      " (" + spaceship.crewQuantity + " tripulantes)\n"
  });

  alert(spaceshipList);
};

let totalShips = [];
let chosenOption;

while(chosenOption != '3') {
  chosenOption = showMenu();

  switch(chosenOption) {
    case '1':
      let addSpaceship = shipData();
      addSpaceship.hitch();
      totalShips.push(addSpaceship);
      break;
    case '2':
      printShips(totalShips);  
      break;
    case '3':
    alert('Programa encerrado!');  
    break;
  };
};