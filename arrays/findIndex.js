//O findIndex() retorna o ÍNDICE do PRIMEIRO elemento da matriz que passa em uma função de teste.

let frutas = ['Maçã', 'Banana', 'cacau', 'alcerola'];

let with5chars = frutas.findIndex(element => { return element.length >= 5});

console.log(with5chars);