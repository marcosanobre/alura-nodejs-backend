const alunos = ['Joao','Maria','Manoel','Jose','Abelardo'];
const medias = [9.5, 8, 7.3, 5.5, 9];

const lista = [alunos, medias];

function exibeNomeENota( aluno ) {
    if ( lista[0].includes(aluno) ) {
        const indice = lista[0].indexOf( aluno );
        const mediaAluno = lista[1][indice];
        console.log( `O aluno ${aluno} tem média: ${mediaAluno}\n\n`);
    } else {
        console.log( `O estudante ${aluno}, não existe na lista.\n\n`);
    }
}

exibeNomeENota( 'Abelardo');
exibeNomeENota('Jose');
exibeNomeENota('Carmela');

