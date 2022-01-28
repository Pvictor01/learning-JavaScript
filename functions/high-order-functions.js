function doubleVelocity(velocity, printer) {
  let newVelocity = velocity * 2;

  printer(newVelocity);

  return newVelocity;
};

let showVelocity = doubleVelocity(20, (velocity) => {
  console.log('Nova velocidade é ' + velocity + 'km/s');
});