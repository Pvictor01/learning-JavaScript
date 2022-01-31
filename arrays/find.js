//retorna o primeiro item que possuir mais de 5 caracteres
let frutas = ['Maçã', 'Banana', 'cacau', 'alcerola'];

let with5chars = frutas.find(element => { return element.length >= 5});

console.log(with5chars);