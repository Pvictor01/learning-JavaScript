//Este programa recebe os dados de uma nave, calcula e mostra os dados requeridos.

let spaceshipName = prompt('Digite o nome da nave');

let velocity = 0;

let options = '';

function menu() {
  options = prompt(`Escolha uma das opções:
                    \n1- Almentar a velocidade em 5 km/s;
                    \n2- Diminuir a velocidade em 5km/s;
                    \n3- Mostrar os dados da nave;
                    \n4- Encerrar operação;`);

  switch (options) {
    case '1':
      increaseVelocity();
      break;
    case '2':
      decreaseVelocity();
      break;
    case '3':
      showInfos();
      break;
    case '4':
      alert('Operação encerrada!');
      break;
    default:
      alert('Opção inválida');
      menu();
  };
};

menu();

function increaseVelocity() {
  velocity += 5;
  menu();
};

function decreaseVelocity() {
  if (velocity > 0) {
    velocity -= 5
  } else {
    alert('A nave está parada')
  };
  menu();
};

function showInfos() {
  alert(`O nome da nave é: ${spaceshipName} \nVelocidade atual ${velocity}km/s`)
  menu();
};