//O reduce() executa uma função em cada elemento da matriz para produzir (reduzi-lo a) um único valor.

const numbers = [45, 4, 9, 16, 25];

let arr = numbers.reduce(index => {
  return index * 2
})

console.log(arr);