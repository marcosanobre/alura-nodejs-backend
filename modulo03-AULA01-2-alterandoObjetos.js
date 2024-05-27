
const estudante = {
    nome: 'Jose Mane',
    idade: 32,
    cpf: '12345678901',
    turma: 'JavaScript'
};

// ERRO
console.log( estudante['telefone'], '\n\n'  );

estudante.telefone = '+55 61 99999999';

console.log( estudante.telefone, '\n\n'  );


