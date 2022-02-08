//Construtores e Instâncias
//instânciar é criar um objeto a partir de uma classe

class spacialStation {
  constructor(name, platformQuantity) { //método construtor, define os valores iniciais dos atributos de um objeto
    this.name = name,
    this.platformQuantity = platformQuantity
  };
};

let observatory = new spacialStation('Observatory', 20); //instânciando e chamando o método construtor
console.log(observatory); 

class spaceship {
  constructor(shipName, type = 'Time machine') {
    this.name = shipName,
    this.type = type
  };
};

let tardis = new spaceship('Tardis');
let darwin = new spaceship('Darwin', 'Battle');

console.log(tardis); 
console.log(darwin); 