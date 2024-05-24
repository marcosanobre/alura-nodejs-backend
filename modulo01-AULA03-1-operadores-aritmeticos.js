const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;

let total = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi;

console.log( total );

let media = total / 4;

if (media >= 7) {
    console.log(`\n\nAprovado com média de ${media}`);
    let bonus = media * 0.1;
    media += bonus;
    console.log(`\n\nVc ganhou um Bônus na média de ${bonus.toFixed(2)}, finalizando: ${media.toFixed(2)} de média.\n\n`);
} else {
    console.log(`\n\nReprovado com média de ${media.toFixed(2)}`);
}


// PRECEDENCIA

let resultado;
resultado = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log( 'O resultado da expressão é: ', resultado );

