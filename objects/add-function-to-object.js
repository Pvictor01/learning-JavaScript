//Adcionando funções aos objetos
let spaceship = {
  name: 'Deméter',
  type: 'Extração',
  maxCrew: 21,
  turnOn: function() {
    alert('Preparando propulsão'),
    alert('Ligando computador de bordo')
  }
};

spaceship.velocity = 0;//add velocity ao objeto

spaceship.speedUp = function(acceleration) { //função que incrementa aceleração a velocidade
  this.velocity += acceleration //this referencia o proprio objeto
};

console.log(spaceship);

spaceship.speedUp(10);

console.log(spaceship);