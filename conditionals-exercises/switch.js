let lightYears = prompt('Digite a distância');

let options = prompt('Escolha uma das opções de converção (1, 2 ou 3): \n1- Parsec(pc) \n2- Unidade astronômica(AU) \n3- Quilômetros(Km)')

switch(options) {
  case '1':
    const pc = lightYears * 0.306601;
    alert(`Distância em anos luz: ${lightYears} \nDistância convertida em Parsec: ${pc}`);
    break;
  case '2':
    const AU = lightYears * 63241.1;
    alert(`Distância em anos luz: ${lightYears} \nDistância convertida em Unidade astronômica: ${AU}`);
    break; 
  case '3':
    const km = lightYears * (9.5 * Math.pow(10,12));
    alert(`Distância em anos luz: ${lightYears} \nDistância convertida em Kilômetros: ${km}`);
    break;  
  default:
    alert(`Distância em anos luz: ${lightYears} \nUnidade não identificada`);
};