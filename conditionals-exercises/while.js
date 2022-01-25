//While recebe apenas uma expressão
//Contador de dobras espaciais
let spaceshipName = prompt('Digite o nome da nave');
let spaceFold = prompt('Deseja entrar na dobra espacial? \n1- Sim \n 2- Não');
let folds = 0

while(spaceFold == 1) {
  folds += 1

  spaceFold = prompt('Deseja entrar na próxima dobra espacial? \n1- Sim \n 2- Não');
}

alert(`Nome da nave: ${spaceshipName} \nNúmero de dobras espaciais: ${folds}`)

/*
let constellation = 'Andromeda';
let pos = 0;
let constellationLength = constellation.length;

while(pos < constellationLength) {
  if(constellation[pos] == 'a' || constellation[pos] == 'A') {
    console.log(pos);
  };

  pos += 1
};
*/