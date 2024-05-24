
/* 
1 - Utilize o método forEach para imprimir cada elemento 
de um array juntamente com seu índice.
*/
const arrayNums = [1, 2, 3, 4, 5, 6];

arrayNums.forEach( (vlrItem, idxItem) => { console.log( 'Indice: ', idxItem, 'Valor: ', vlrItem ); } );


/* 
2 - Crie uma função chamada executaOperacaoEmArray que recebe 
dois parâmetros: um array e uma função de callback que executa 
alguma operação matemática. Essa função deve iterar por cada 
elemento do array e aplicar a função de callback em cada um dos elementos, 
imprimindo o resultado da operação no console.
*/

function executaOperacaoEmArray( array1, funcaoDeCallback ) {
    return array1.map(funcaoDeCallback);
}

function triplicaItem( item ) {
    return item * 3;
}

const listaNumerosTriplicados = executaOperacaoEmArray( arrayNums, triplicaItem );

console.log( '\n\nArray com valores triplicados :', listaNumerosTriplicados );


/* 
3 - Você recebeu um array numeros contendo valores numéricos. 
Crie um programa que verifique se um número específico está 
presente nesse array. Se estiver, o programa deve retornar 
a posição (índice) desse número. 
Caso contrário, se o número não estiver presente, 
o programa deve retornar "-1".
*/
const numeros = [9.5, 8, 7.3, 5.5, 9];

function exibeNumero( numero ) {
    if ( numeros.includes(numero) ) {
        const indice = numeros.indexOf( numero );
        return indice;
    } else {
        return -1;
    }
}

const decisao = function( num ) {
    const indice = exibeNumero(num);
    if (indice > 0) {
        return `\nO número ${num} está presente no índice: ${indice}\n\n`;
    } else {
        return `\nO número ${num}, não existe na lista.\n\n`;
    }
}    

// console.log( decisao( 15 ) );
// console.log( decisao( 5.5 ) );
// console.log( decisao( 9 ) );
// console.log( decisao( 1.5 ) );

const arrDecisao = [15, 5.5, 9, 1.5];
arrDecisao.map( valorItem => console.log( decisao(valorItem) ) );



/* 
4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
Utilize o método concat() para unir os arrays das turmas A e B em um único array 
chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico 
pelo nome no array todosAlunos. Exiba no console uma mensagem informando 
o nome do aluno procurado; caso não exista na lista, 
retorne uma mensagem de aviso, por exemplo Aluno não encontrado.
*/
const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];

const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

const todasAsTurmas = nomesTurmaA.concat( nomesTurmaB );

function funcaoProcura( array2, nomeProcurado ) {
    const boolRet = array2.find( aluno => aluno === nomeProcurado );
    return boolRet ;
}
const aluna = 'Ana Souza';
const retorno = funcaoProcura( todasAsTurmas, aluna );
if (retorno) {
    console.log( `A aluna ${aluna} existe na lista.`);
} else {
    console.log( `A aluna ${aluna} não encontrada na lista.`);    
}

  
/* 
5 - Considere um array de números inteiros.
Utilize o método forEach() para multiplicar cada elemento do array 
por 3 e exibir no console o resultado de cada multiplicação. 
Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
*/

const numerosQQ = [6, 9, 12, 15, 18, 21];

console.log( '\n\nLista original: ', numerosQQ, '\nLista multiplicada por 3:\n');

numerosQQ.forEach( numero => {
    const resultado = numero * 3;
    console.log( resultado );
});

const indiceDoNum18 = numerosQQ.findIndex( numero => numero === 18);
if (indiceDoNum18 !== -1) {
    console.log( `\n\nO numero 18 existe na lista no indice ${indiceDoNum18}.`);
} else {
    console.log( `\n\nO numero 18 não existe na lista.`);    
}
