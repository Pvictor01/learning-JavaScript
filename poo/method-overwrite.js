class Spaceship { //Classe mãe
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
  }; 
  speedUp(acceleration) { //Método
    this.currentVelocity += acceleration
    if(this.currentVelocity > this.maxRecommendedVelocity) {
      alert('Velocidade máxima ultrapassada! \nReduza para não provocar acidentes.')
    };
  };
};

class TransportSpaceship extends Spaceship {
  speedUp() { //Sobrescrevendo o método da classe Spaceship
    alert('Naves de transporte só aumentam a velocidade em 1 km/s')
    this.currentVelocity += 1
  };
};

let transportSpaceship = new TransportSpaceship ('Transportadora', 20, 200);

transportSpaceship.speedUp();

console.log(transportSpaceship);