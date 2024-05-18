// Da forma tradicional
// com Variaveis

const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log( media );


// Agora com ARRAY

const notas = [10, 6.5, 8, 7.5];

media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log( media );
