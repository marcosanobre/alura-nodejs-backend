// [1]
/* 
Crie uma função que receba dois arrays e os concatene em um único array.
*/
function concatenaArrays( arr1, arr2 ) {
    return arr1.concat( arr2 );
}
const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log( concatenaArrays( arr1, arr2 ), '\n\n' );


// [2]
/* 
Crie um array chamado numeros contendo números de 1 a 10. 
Utilize o método slice para criar um novo array chamado 
parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
*/
const numeros = [1,2,3,4,5,6,7,8,9,10];

const parteNumeros = numeros.slice(3,8);

console.log( parteNumeros, '\n\n' );


// [3]
/* 
Dado o array frutas contendo frutas que desejamos comprar na feira:
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
Utilize o método splice para remover as frutas no índice 2 e 3 e, 
em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
*/
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log( 'Array original: ',frutas );
const frutasDeletadas = frutas.splice(2,2,'Kiwi','Pèssego');
console.log( 'Frutas excluidas:', frutasDeletadas, '\n' );
console.log( 'Array alterado: ', frutas, '\n\n' );


// [4]
/* 
Crie dois arrays chamados menuPrincipal e menuDeSobremesas 
contendo opções do cardápio de um restaurante. 
Utilize o método concat para criar um novo array menuCompleto 
contendo todos os elementos de menuPrincipal 
seguidos pelos elementos de menuDeSobremesas.
*/
const menuPrincipal = ['Bife a cavalo', 'Estrogonofe de frango', 'Feijoada carioca'];
const menuDeSobremesas = ['Pudin', 'Sorvete', 'Salada de frutas'];

const menuCompleto = menuPrincipal.concat( menuDeSobremesas );
console.log( menuCompleto, '\n\n' );


// [5]
/* 
Crie uma lista bidimensional com 3 linhas e 3 colunas, 
onde cada elemento seja uma matriz 3x3 com valores 
iniciando em 1 e aumentando em 1 a cada elemento.
*/
var inc = 0;
var matriz = [ [,,,], [,,,], [,,,] ];

console.log( matriz, matriz.length , matriz[0].length);

for (let c = 0; c < matriz.length; c++) {
    for (let l = 0; l < matriz[c].length; l++) {
        inc += 1;
        matriz[c][l] = inc;
    }
}

console.log( '\n\n', matriz );
matriz.forEach( row => console.log( '\n', row ) );


// [6]
/* 
Acesse e imprima o elemento na segunda linha e terceira coluna
da lista bidimensional - matriz criada no exercicio anterior.
*/

console.log( '\n\nElemento da segunda linha e terceira coluna :', matriz[1][2] );


// [7]
/* Adicion 15 na 3ça linha e 2a coluna */
matriz[2][1] = 15;

console.log( '\n\nMatriz alterada :\n' );
matriz.forEach( row => console.log( '\n', row ) );
