//O some() verifica se ALGUNS valores de array passam em um teste.

const numbers = [45, 4, 9, 16, 25];

let sum = numbers.some(index => {
  return index > 10
})

console.log(sum);//irá retornar TRUE