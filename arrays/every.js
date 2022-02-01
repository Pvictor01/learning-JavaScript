//O every() verifica se TODOS os valores do array passam em um teste.

const numbers = [45, 4, 9, 16, 25];

let arr = numbers.every(index => {
  return index > 10
})

console.log(arr);//irá retornar FALSE