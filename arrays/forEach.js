//forEach, somando os itens do array
let numbers = [1, 2, 3, 4, 3];

console.log(numbers);

numbers.forEach((item, index, arr) => {
  arr[index] += item;
});

console.log(numbers);