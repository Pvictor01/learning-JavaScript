//Métodos são funções acrescentadas dentro de objetos
class spaceship {
  constructor(name) { //mesmas regras das funções
    this.name = name,
    this.velocity = 0
  }
  speedUp(acceleration) { //método
    this.velocity += acceleration
  }
};

let tardis = new spaceship('Tardis');//só chama o construtor
console.log(tardis);

tardis.speedUp(10);
console.log(tardis);