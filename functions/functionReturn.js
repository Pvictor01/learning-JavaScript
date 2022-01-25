function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration;

  console.log('New velocity: ' + newVelocity);

  return newVelocity;
};

speedUp(10, 90);

/*
let velocity = 80;
let acceleration = 5;

console.log(velocity);

velocity = speedUp(velocity, acceleration);

console.log(velocity);*/