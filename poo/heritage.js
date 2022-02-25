class Spaceship { //Classe mãe
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
  };
  speedUp(acceleration) {
    this.currentVelocity += acceleration
    if(this.currentVelocity > this.maxRecommendedVelocity) {
      alert('Velocidade máxima ultrapassada! \nReduza para não provocar acidentes.')
    };
  };
};

class BattleSpaceships extends Spaceship {//Herdando dados da classe Spaceship
  stop() {
    this.currentVelocity = 0
    alert('Recolhendo armas e parando a nave de batalha!')
  };
};

class DiscoverySpaceships extends Spaceship {
  stop() {
    this.currentVelocity = 0
    alert('Desligando propulsores e parando a nave!')
  };
};

let fenix = new BattleSpaceships('Fenix', 12, 240);
let tardis = new DiscoverySpaceships('Tardis', 2, 800);

fenix.speedUp(250);
tardis.speedUp(700);

fenix.stop();
tardis.stop();