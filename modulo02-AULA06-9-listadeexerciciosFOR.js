// [1]
/* 
Escreva um código que utilize o loop for/of para 
iterar e imprimir cada elemento de um array.
*/

const umArrayQQ = [2,4,6,8,10,1,3,5,7,9];
for (const elemento of umArrayQQ) {
    console.log( elemento );
}


// [2]
/* 
Crie uma função que receba uma array e imprima 
no console o número do índice e o elemento.
*/
const umArrayNumQQ = [2,4,6,8,10,1,3,5,7,9];
function imprimeArray( array ) {
    for (let index = 0; index < array.length; index++) {
        console.log( `No indice: ${index} => Consta o valor: ${array[index]}`)
    }
}

imprimeArray( umArrayNumQQ );


// [3]
/* 
Crie uma função que receba uma array de números 
inteiros e retorne a soma dos elementos.
*/
function somaDosElementos( arr3 ) {
    let soma = 0;
    for (const elemento of arr3) { soma += elemento };
    return soma;
}
const umArrayQQ2 = [2,4,6,8,10,1,3,5,7,9];
console.log( '\n\nA SOMA é: ', somaDosElementos(umArrayQQ2) );


// [4]
/* 
Crie uma função que receba uma array de números inteiros e retorne 
o menor valor e o maior valor da array, no seguinte 
formato: 'o menor número é X e o maior número é Y'.
*/
const umArrayQQ3 = [22,41,63,85,10,1,43,55,71,19];
let menor = umArrayQQ3[0];
let maior = umArrayQQ3[0];

function maiorMenor(Array) {
    for (let index = 0; index < Array.length; index++) {
        if ( umArrayQQ3[index] < menor ) {
            menor = umArrayQQ3[index];
        } else if ( umArrayQQ3[index] > maior ) {
            maior = umArrayQQ3[index];            
        } 
    }
}

maiorMenor(umArrayQQ3);

console.log( `\n\nO menor número é ${menor} e o maior número é ${maior}\n\n`);


// [5]
/* 
Crie um programa que utilize um laço for para percorrer 
uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e 
exibir no console apenas os números pares contidos nesse array.
*/
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
for (const numero of numeros) {
    if ((-2)**numero > 0) {
        console.log( `O número ${numero} é PAR !!!\n\n` );
    }
}


// [6]
/* 
Crie um programa que calcule a média dos números 
presentes em um array utilizando um loop for.
*/

let soma1 = 0;
for (let index = 0; index < numeros.length; index++) {
    soma1 += numeros[index];
}

console.log( 'A média é: ', soma1/numeros.length );