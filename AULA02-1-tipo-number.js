const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = '5';

let total = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi;

console.log( total );

total = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + Number.parseInt( notaQuartoBi );

console.log( total );

total = total / 4;

console.log( '\n A média é: ' + total.toFixed(2) + '\n\n\n');

// Mais sobre o tipo NUNMBER

console.log( 5 * 'a' ); // NaN

console.log( 5 * '5' ); // 25

// Observe o problema do operador +
// Ele CONCATENA
console.log( 5 - '15' ); // 25
