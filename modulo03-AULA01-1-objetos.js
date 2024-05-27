
const estudante = {
    nome: 'Jose Mane',
    idade: 32,
    cpf: '12345678901',
    turma: 'JavaScript'
};

// acessando o OBJETO
console.log( estudante, '\n\n' );

// acessando uma propriedade
console.log( estudante.nome, '\n\n' );

// notação genérica de PROPRIEDADE
function exibeProp( obj, prop ) {
    return obj[prop]; //<<<< Observe o uso de [ ]
}

console.log( exibeProp( estudante, 'turma'), '\n\n'  );

// equivale a :

console.log( estudante['idade'], '\n\n'  );

