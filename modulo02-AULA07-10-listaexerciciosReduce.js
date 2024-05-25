/* 
1 - Faça uma função que aceite vários arrays como argumentos e 
retorne um único array contendo todos os elementos 
dos arrays fornecidos, utilizando Spread Operator.
*/
const array01 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const array02 = ['Joao','Ana','Clara','Maria','Joao','Maria','Joao'];
const array03 = [0, 9, 5, 4, 7, 3, 6, 5, 9, 2, 8];
/* MINHA SOLUÇÂO - Equivocada
function juntaTudo( arr1, arr2, arr3 ) {
    return [ ...new Set( arr1 ), ...new Set( arr2 ), ...new Set( arr3 ) ];
};
console.log( juntaTudo(array01, array02, array03) );
*/
// Solução do Instrutor
function concatArrays(...arrays) {
    return [].concat(...arrays); // operador spread para concatenar os arrays
}
const arr11 = [1, 2];
const arr21 = [3, 4];
const arr31 = [5, 6];
const arraysConcatenados = concatArrays(arr11, arr21, arr31);
console.log(arraysConcatenados, '\n\n'); // Saída: [1, 2, 3, 4, 5, 6]



/* 
2 - Crie um array de números chamado valores. 
Depois,escreva um programa que some todos os elementos 
deste array utilizando o método reduce.
*/
const valores = [11, 22, 33, 44, 55];
const somaValores = valores.reduce( (acumulador, valor) => acumulador + valor, 0 );
console.log( somaValores );


/* 
3 - Considere duas listas de cores:
Crie um programa que una essas duas listas, 
removendo cores duplicadas e exiba a lista final.
*/
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul', 'Laranja'];

const listaUnica = (coresLista1, coresLista2) => {
    const juntaArr = coresLista1.concat( coresLista2 );
    return [ ...new Set(juntaArr) ];
};
console.log( '\n\n', listaUnica(coresLista1, coresLista2) );
// Código super-reduzido
const arrJuntados = [ ...new Set( coresLista1.concat( coresLista2 ) ) ];
console.log( '\n\n', arrJuntados );
// ou 
console.log( '\n\n', [ ...new Set( coresLista1.concat( coresLista2 ) ) ] );
// ou 
console.log( '\n\n', [ ...new Set( [...coresLista1, ...coresLista2] ) ] );


/* 
4 - Escreva uma função que receba um array de números e 
retorne um array contendo apenas os números pares.
*/
const pares = ( arr ) => arr.filter( item => (-2)**item > 0 );
console.log( '\n\nNumeros Pares: ', pares(array01) );



/*
5 - Crie uma função que filtre os números de um array 
que são múltiplos de 3 e maiores que 5.
*/
const maioresQue5 = ( arr ) => arr.filter( item => ( item%3 == 0 && item > 5 ) );
console.log( '\n\nArray original: ', array03, '\n\nNumeros multiplos de 3 E maiores que 5 são: ', maioresQue5(array03) );


/*
6 - Crie uma função que receba um array de números e 
retorne a soma de todos os elementos.
*/ 
const somaDosNumeros = array03.reduce( (acumulador, num) => acumulador + num, 0 );
console.log( '\n\nA soma dos numero do Array Original é: ', somaDosNumeros );



