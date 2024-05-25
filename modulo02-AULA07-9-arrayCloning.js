const notas = [9.5, 8, 7.3, 6.9];

// Clonagem por referência
const novaListaNotas01 = notas;

novaListaNotas01.push( 10 );
// Repare que novaListaNotas01 funciona meramente
// como um "ponteiro" para o array notas
console.log( notas );


// Clonando com o "operador" de SPREAD 

const novaListaNotas02 = [ ...notas, 11 ];
// Aqui acima o Spread Operator além de trazer
// o conteúdo no array, permite tbm incrementar 
// para o novo array
console.log( notas );
console.log( novaListaNotas02 );

