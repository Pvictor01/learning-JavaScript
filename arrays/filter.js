//retornar os itens que possuem mais de 5 caracteres com filter
let frutas = ['Maçã', 'Banana', 'cacau', 'alcerola'];

let with5chars = frutas.filter(element => { return element.length >= 5});

console.log(with5chars);