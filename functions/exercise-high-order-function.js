//Reduz a velocidade da nave a cada segundo(loop) com um valor escolhido...

let spaceshipVelocity = prompt('Digite a velocidade da nave?');

function slowDown(velocity, printer) {
  let deceleration = prompt('Quantos kilômetros por segundo deseja desacelerar?');

  while(velocity > 0) {
    printer(velocity);
    velocity -= deceleration;
  };

  console.log('A nave parou');
};

slowDown(spaceshipVelocity, (velocity) => {
  console.log('A nave está a ' + velocity + 'km/s');
});