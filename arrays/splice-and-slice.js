//Splice remove, adciona e substitui o array original
let array = ['aaa', 'bbb', 'ccc'];

console.log(array);

let removed = array.splice(1, 2, 'yyy', 'xxx');//a partir da posição 1, remova dois itens e acrescente 2 strings

console.log(array);
console.log(removed);

//Slice extrai parte do array sem alterar o original
let array1 = ['a', 'b', 'c', 'd', 'e', 'f'];

let extracted = array1.slice(1, 4);//retorna a primeira posição até a antepenultima requerida

console.log(array1);
console.log(extracted);