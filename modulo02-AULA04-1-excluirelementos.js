const notas = [10, 6, 8, 5.5, 10];

notas.pop();

let media = 0;

for (let index = 0; index < notas.length; index++) { media += notas[index] }; 

media /= notas.length;

console.log( media );

console.log( media.toFixed(2) );


