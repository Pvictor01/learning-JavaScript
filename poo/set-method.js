class TransportSpaceship {
  constructor(name) {
    this.name = name
    this.currentVelocity = 0
  };

  set velocity(newVelocity) { //O método set será interpretado como uma variável, atribuindo valor a ela
    if(newVelocity > 120) {
      this.currentVelocity = 120 //Setou a velocidade em no máximo 120
    } else {
      this.currentVelocity = newVelocity
    };
  };
};

let spaceship = new TransportSpaceship('Tardis');

spaceship.velocity = 130; 

console.log(spaceship);