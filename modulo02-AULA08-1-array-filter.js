const alunos = ['Joao','Maria','Manoel','Jose','Abelardo'];
const medias = [9.5, 8, 7.3, 5.5, 6.9];

const tamanhoMenor4 = alunos.filter( aluno => {
    return aluno.length < 6;
}
);

console.log( tamanhoMenor4 );

const reprovados = alunos.filter( (aluno, indice) => {
    return medias[indice] < 7;
}
);

console.log( reprovados );
