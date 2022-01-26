console.log(speedUp(20, 30)); //função declarada de forma 'normal', ela é lida ANTES de tudo no codigo 
console.log(doubleSpeed(20, 30)); //Função anônima só pode ser lida DEPOIS de sua declaração

let doubleSpeed = function(velocity) {
  return velocity * 2;
};

function speedUp(velocity, acceleration) {
  return velocity + acceleration;
};