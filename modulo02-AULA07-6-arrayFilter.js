
const alunos = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida',
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

const medias = [9.5, 8, 7.3, 5.5, 9, 4.8];

const tamanhoNome = alunos.filter( (aluno) => {
    return aluno.length < 11;
});

const reprovados = alunos.filter( ( aluno, indice ) => {
    return medias[indice] < 7;
});

// Os parametros que não estão sendo usados na lógica 
// de uma função, podem ser somente indicados com 
// UNDERLINE - olhe o exemplo abaixo
const reprovados1 = alunos.filter( ( _ , indice ) => {
    return medias[indice] < 7;
});


console.log( tamanhoNome, '\n\n' );

console.log( reprovados );

console.log( '\n\n', reprovados1 );




