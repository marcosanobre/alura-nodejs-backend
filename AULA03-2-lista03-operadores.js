// [1]

let vlrSaldo = 155.34;
let vlrDeposito = 310.31;
let vlrSaque = 99;

vlrSaldo += vlrDeposito;

let operacao = vlrSaldo - vlrSaque;

console.log( 'Saldo R$', vlrSaldo );
console.log( 'Saldo após saque R$', operacao, '\n\n' );


// [2]

let numQQ = 31;

let parOuImpar = numQQ % 2;

console.log( 'Forma - 1 => Resto da divisão por 2 (módulo)\n',  parOuImpar === 0 ? 'Par' : 'Impar' );

parOuImpar = (-2) ** numQQ;

console.log( '\n\nForma - 2 => Potencia de base negativa (-2^Num)\n',  parOuImpar > 0 ? 'Par' : 'Impar' , '\n\n');


// [3]

let userLogado = true;
let userAdmin = false;
const resultado = userLogado && userAdmin ;

console.log('Administrador está logado no sistema ?', resultado ? 'Sim.' : 'Não.', '\n\n');


// [4]

const cond1 = true;
const cond2 = false;

console.log( 'Resultado do operador OR é : ', (cond1 || cond2), '\n\n' );


// [5]

const idadeMinima = 16;
const idadeUsuario = 30;

if (idadeUsuario >= idadeMinima) {
    console.log('Você pode comprar o ingresso. Bom show !!');
} else {
    console.log('Você não tem idade suficiente para comprar ingresso.');
}

