//variáveis estáticas são diretamente ligados a classe
class Spaceship {
  static get decelerationRate() { //Simulando variavel estática com método GET
    return 0.15
  };

  constructor(name) {
    this.name = name
    this.currentVelocity = 0
  };

  speedUp(acceleration) {
    this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate)) //Irá subtrair 15% do valor de acceleration
  };
};

let spaceship = new Spaceship('Tardis');

spaceship.speedUp(100); 

console.log(spaceship);