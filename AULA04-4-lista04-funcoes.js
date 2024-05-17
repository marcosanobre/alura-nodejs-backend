// [1]
/* Crie uma função que receba o nome de uma pessoa como argumento e 
retorne uma saudação personalizada. 
Em seguida, chame a função e exiba a saudação no console.
*/

const cumprimento = (nome) => {
    const greetingMessage = () => {
        let h = new Date().getHours();
        if (h <= 5) return 'Boa madrugada';
        if (h < 12) return 'Bom dia';
        if (h < 18) return 'Boa tarde';
        return 'Boa noite';
      }
    return greetingMessage() + `, ${nome}.`;
}
console.log( cumprimento('Marcos Nobre') );

// [2]
/* Crie uma função que receba a idade de uma pessoa e 
retorne se ela é maior de idade (idade >= 18). 
Imprima o resultado no console. 
*/

const maiorDeIdade = (idade) => (idade >= 18);
console.log( 'Voce ' + ( maiorDeIdade(21) ? 'já ' : 'não ' ) + 'é maior de idade.\n\n' );


/* Crie uma função que receba uma string e verifique se é um palíndromo 
(uma palavra que é lida da mesma forma de trás para frente) 
utilizando o método de string reverse(). 
Retorne true se for um palíndromo e false caso contrário. 
Imprima o resultado no console. 
*/

const ehPalindromo = (palavra) => {
    const palavraReversa = palavra.split("").reverse().join("");
    return ( palavra == palavraReversa );
}
let palavra = 'radar';
console.log( `A palavra: ${palavra} ` + ( ehPalindromo( palavra ) ? 'é um Palindromo.' : 'não é um Palindromo.' ) );


/* Crie uma função que receba três números como 
parâmetros e determine qual é o maior entre eles. 
Utilize estruturas condicionais (if, else) para comparar os valores e 
determinar o maior. Imprima o maior valor no console.
*/

const maiorDeTres = (numeroUm, numeroDois, numeroTres) => {
    // [1] implementação falha para numeros
    // const arrRetorno = [ `${numeroUm}`, `${numeroDois}`, `${numeroTres}`];
    // return arrRetorno.sort();
    //console.log( '\n\nOriginal ==>>', arrRetorno );
    //console.log( 'Classificado ==>>', arrRetorno.sort() );
    // [2]
    const arrRetorno = [ numeroUm, numeroDois, numeroTres];
    return arrRetorno.sort( function(a,b) {
        return a - b;
    } );
}
const omaiorEh = maiorDeTres( 5, 31, 10);
console.log( `\n\nO maior dos 3 numeros é o: ${omaiorEh[2]}` );


/* 
Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. 
A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
 */

const calculaPotencia = (base, expoente) => base ** expoente;
console.log( '\n\n', calculaPotencia(11,8) );




