//Recebem ou retornam outras funções, geralmente anônimas

function doubleVelocity(velocity, printer) {//printer se torna um callback pois é chamado dentro de uma função de alta classe
  let newVelocity = velocity * 2;

  printer(newVelocity);

  return newVelocity;
};

let printVelocity = doubleVelocity(40, newVelocity => {
  console.log('A velocidade é ' + newVelocity + 'km/s');
})

/* OR
function printerVelocity(velocity) {
  console.log('A velocidade é ' + velocity+ 'km/s');
};

let newVelocity = doubleVelocity(90, printerVelocity);*/