// Declarar e Invocar uma função

function exibeNomeEstudante() {
    console.log( 'Caroline\n\n');
}

exibeNomeEstudante();


// Parametros

function exibeNomeEstudante01( nome ) {
    console.log( nome, '\n\n');
}

exibeNomeEstudante01('Josefina');

exibeNomeEstudante01('Ana Maranhão');


// Retorno

function exibeInfosEstudante( nome, nota ) {
    return `O nome é: ${nome} e a nota é ${nota}`;
}

console.log( exibeInfosEstudante('Josefina', 8.4) );

console.log( exibeInfosEstudante('Ana Maranhão', 7.1), '\n\n' );
