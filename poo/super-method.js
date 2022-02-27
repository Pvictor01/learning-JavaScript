class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
  };

  speedUp(acceleration) {
    this.currentVelocity += acceleration
    if(this.currentVelocity > this.maxRecommendedVelocity) {
      alert('VELOCIDADE MÁXIMA ULTRAPASSADA DE: ' + this.maxRecommendedVelocity + ' km/h'
      + '\nVocê está a ' + this.currentVelocity + ' km/h'
      + '\nReduza para não causar danos a nave')
    };
  };
};

class TimeMachine extends Spaceship{
  constructor(name, maxCrew, maxRecommendedVelocity, pilot) {
    super(name, maxCrew, maxRecommendedVelocity)
    this.pilot = pilot
  };

  speedUp(acceleration) {
    acceleration /= 2 //A velocidade incrementada será divida por 2
    alert('Incrementando velocidade em ' + acceleration + ' km/h')
    super.speedUp(acceleration)
  };
};

let timeMachine = new TimeMachine('Tardis', 2, 1000, 'Doctor');

timeMachine.speedUp(2001);

console.log(timeMachine);