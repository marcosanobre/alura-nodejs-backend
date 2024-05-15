/*
1) exibir o tipo de cada variável
*/

let var1 = 'string';
let var2 = 10; // numero
let var3 = true; // bool

console.log( 'var1 é uma: ', typeof var1);
console.log( 'var2 é uma: ', typeof var2);
console.log( 'var3 é uma: ', typeof var3);

/*
Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
Em seguida, combine-as em uma terceira variável usando o operador + e 
em uma quarta variável usando template strings. Por fim, 
imprima os resultados obtidos no console.
*/

let primeiroNome = 'Marcos';
let ultimoNome = 'Silva';
let terceiraVariavel = primeiroNome + ' ' + ultimoNome;
let quartaVariavel = `\n\nEu sou o: ${terceiraVariavel}.`;

console.log(quartaVariavel);

// Declare duas variáveis, uma contendo um número e outra contendo uma string. 
// Em seguida, combine-as em uma terceira variável usando template strings 
// para montar uma frase e exiba o resultado no console.

let varNumero = 100;
let varString = 'O número é: ';
let maisUmaVariavel = `\n${varString}${varNumero}.`;

console.log(maisUmaVariavel);


/*  crie uma variável inicializada com um valor de qualter tipo e, 
    em seguida, reatribua um novo valor a essa variável. 
    imprima ambos os valores no console após atribuí-los.
 */
let variavelQQ = '\n\nvariavelQQ agora é uma string';
console.log(variavelQQ);
variavelQQ = 1014;
console.log(`\nPorém agora variavelQQ é o numero : ${variavelQQ}\n\n\n`);



/* Declare uma variável usando var fora de um bloco de código 
(por exemplo, if) e outra dentro desse bloco. 
Tente acessar essas variáveis dentro do bloco e fora dele utilizando 
console.log e analise os resultados. 
Faça o mesmo processo utilizando let e compare com os resultados anteriores.
 */

/* var umaVar = 155;
if (true) {
    var segundaVar = 'string';
    console.log( umaVar , segundaVar );
}
console.log( umaVar , segundaVar );
 */

let umaVar = 6155;
if (true) {
    let segundaVar = '===>>>string';
    console.log( umaVar );
    console.log( segundaVar );
}
console.log( umaVar );
//console.log( segundaVar ); // PAU


/* Declare uma variável booleana que informa se está chovendo 
e utilize-a em uma estrutura condicional (if) para 
exibir uma mensagem informando se é preciso levar um guarda-chuva 
ou não dependendo do valor da variável.
 */

let chovendo = 'N';
chovendo = ( chovendo == 'S' ? true : false );
if (chovendo) {
    console.log('\n\nEstá chovendo e é melhor levar guarda-chuva.');
} else {
    console.log('\n\nFique tranquilo, não chove e não precisa de guarda chuva.');
}




