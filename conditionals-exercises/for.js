//Com FOR é possível adcionar mais de uma variável
//Substituindo letras 

let spaceShipName = prompt('Enter the name of the ship');
let chooseLetter = prompt('Enter the letter you want to replace');
let letterToReplace = prompt('Which letter do you want to replace?');
let newSpaceShipName = '';

for(i = 0; i < spaceShipName.length; i++) {
  if(spaceShipName[i] == chooseLetter) {
    newSpaceShipName += letterToReplace
  } else {
    newSpaceShipName += spaceShipName[i]
  }
};

alert(newSpaceShipName);

/* percorrendo a frase ao contrário e parando ao encontrar a letra 'e'
let spaceShipName = prompt('Enter the name of the ship');

let newSpaceShipName = '';

for(i = spaceShipName.length - 1; i >= 0; i--) {
  if(spaceShipName[i] == 'e') {
    break;
  };
  newSpaceShipName += spaceShipName[i];
};  

alert(`Original ship name: ${spaceShipName} \nReverse name: ${newSpaceShipName}`);
*/