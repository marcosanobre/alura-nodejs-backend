// observar que a base de dados é um grande ARRAY
const estudantes = require('./estudantes.json');

function buscaInformacao( lista, chave, valor ) {
    // o retorno a baixo , somente vasculha properties literais
    //return lista.find( estudante => estudante[chave] === valor);

    // fazendo com que a busca seja recursiva em cada Objeto do Array
    return lista.find( estudante => estudante[chave].includes(valor) );
};

const estudanteEncontrado = buscaInformacao( estudantes, 'nome', 'Juliet' );

console.log( estudanteEncontrado );

console.log( buscaInformacao( estudantes, 'telefone', '75993785074' ), '\n\n' );




