// [1]
/* 
Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. 
Crie um array esparso e atribua valores a alguns elementos do array
(por exemplo, defina valores nos índices 1, 3 e 7). 
Imprima no console o array e também a informação de comprimento do array.
*/
const arrayEsparso = [,22,,33,,,,44];
/* arrayEsparso.push(null);
arrayEsparso.push(33);
arrayEsparso.push(null);
arrayEsparso.push(null);
arrayEsparso.push(null);
arrayEsparso.push(44);
 */
console.log( arrayEsparso );
console.log( arrayEsparso.length );


// [2]
/* 
Crie um programa em Node.js que inicie com um array cinco elementos e 
atribua um novo valor para a primeira posição (índice 0) desse array. 
Em seguida, exiba o array antes e depois da alteração.
*/
const arrayDeCinco = [,,,,,];
console.log( '\n\nAntes', arrayDeCinco );
arrayDeCinco[0] = 'um Valor qq'; 
console.log( '\nDepois', arrayDeCinco );


// [3]
/* 
Crie um array vazio chamado meuArray e adicione 
3 números inteiros de sua escolha utilizando o método push(). 
Imprima no console os itens presentes no array para 
verificar se os números foram adicionados. 
Em seguida, substitua o primeiro elemento do array (índice 0) 
pelo dobro do seu valor atual. Imprima no console o 
array atualizado para verificar a mudança.
*/
const meuArray = [];
meuArray.push(55, 66, 77);
console.log( '\n\n O Array após a adição de elementos\n', meuArray );

let valorAtual = 0;
for (let index = 0; index < meuArray.length; index++) { valorAtual += meuArray[index]; };
console.log( '\n O valor atual é:', valorAtual );

meuArray[0] = valorAtual * 2;
console.log( '\n O Array após a operação\n', meuArray );


// [4]
/* Desenvolva um programa em Node.js que crie um array vazio e 
atribua valores a ele utilizando o método push(). 
Adicione três números inteiros ao array e, em seguida, 
exiba o array resultante.
*/
const umArray = [];
umArray.push( 30, 40, 50 );
console.log( umArray );


// [5]
/*
Desenvolva um programa em Node.js que simule uma clínica veterinária. 
Crie um array vazio chamado clinica que representará a fila de animais na clínica. 
Em um primeiro momento, simule a chegada de três animais diferentes 
e exiba a lista de animais no console. 
Após a exibição, remova os animais da lista um por vez e, por fim, 
exiba no console o estado final da lista. 
*/
const arrClinica = [];
arrClinica.push("\nAnimal 01: cadela Dalila", '\nAnimal 02: gato Anibal', '\nAnimal 03: cachorro Boris');
console.log('\n\nAnimais a Atender:','\n==================================');
for (let index = 0; index < arrClinica.length; index++) { console.log( arrClinica[index] ) };
console.log('\n\n==================================');
for (let index = 1; index <= arrClinica.length; index++) { 
    console.log( '\nAtendendo o : ' ); 
    console.log( arrClinica[ arrClinica.length -1 ] );
    arrClinica.pop();
}
console.log( '\nAtendendo o : ' ); 
console.log( arrClinica[arrClinica.length-1] );
arrClinica.pop();
console.log( '\nConclusão:', arrClinica );

