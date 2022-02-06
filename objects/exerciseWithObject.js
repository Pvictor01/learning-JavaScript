//App que faz o mapeamento da velocidade de uma nave

let spaceship = {
  velocity: 0,
  speedUp: function(acceleration) {
    this.velocity += acceleration
  },
  slowDown: function(acceleration) {
    this.velocity -= acceleration
  }
};

function registerDatas() {
  spaceship.name = prompt('Digite o nome da nave');
  spaceship.type = prompt('Digite o tipo da nave');
  spaceship.maxVelocity = Number(prompt('Digite a velocidade máxima da nave em km/s'));
};

function accelerate() {
  let acceleration = Number(prompt('Quanto deseja acelerar? km/s'));

  spaceship.speedUp(acceleration);

  if(spaceship.velocity > spaceship.maxVelocity) {
    alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
            "\nVelocidade atual da Nave: " + spaceship.velocity + "km/s" +
            "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
  };
};

function speedDown() {
  let acceleration = Number(prompt('Quanto deseja desacelerar? km/s'));

  spaceship.slowDown(acceleration);

  if(spaceship.velocity <= 0) {
    alert('A nave já está parada!')
  } else if(spaceship.velocity > spaceship.maxVelocity) {
    alert("VELOCIDADE MÁXIMA ACIMA DO LIMITE!" +
          "\nVelocidade atual da Nave: " + spaceship.velocity + "km/s" +
          "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
  }; 
};

function stopSpaceship() {
  alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: "
        + spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity + 'km/s');

  spaceship.velocity = 0
};

function showMenu() {
  let chosenOption;

  do {
    chosenOption = prompt('Você deseja \n1- Acelerar \n2- Desacelerar \n3- Parar');
    switch(chosenOption) {
      case '1':
        accelerate();
        break;
      case '2':
        speedDown();
        break;
      case '3':
        stopSpaceship();  
      default:
        alert('Opção inválida')    
    }
  } while(chosenOption != '3');
};

registerDatas();
showMenu();