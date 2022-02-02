let spaceship = {
  name: 'Paulo',
  crewQuantitty: 21,
  type: 'Batalha'
};

//let spaceship = new Object() //criando objeto vazio

console.log(spaceship.name);//chamando propriedade do objeto
console.log(spaceship['name']);//chamando propriedade do objeto

spaceship.isHitched = false;//adicionando propriedade ao objeto
spaceship['shieldLevel'] = 100//adicionando propriedade ao objeto

console.log(spaceship);