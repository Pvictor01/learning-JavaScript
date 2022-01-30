//tornando strings do array em maiusculas com map.
let frutas = ['Maçã', 'Banana', 'cacau', 'alcerola'];

let upcased = frutas.map(item => {
  let upcased = item.toUpperCase();

  return upcased;
});

console.log(frutas);
console.log(upcased);

//multiplicando itens do array
let numbers = [1, 2, 3, 4, 3];

let multiplicate = numbers.map(item => {
  return item * 10;
});

console.log(numbers);
console.log(multiplicate);