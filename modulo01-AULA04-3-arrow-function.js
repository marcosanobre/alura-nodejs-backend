
const estudanteReprovou = ( notalFinal, faltas) => {
    if (notalFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log( estudanteReprovou(6, 5) );

console.log( estudanteReprovou(8, 2) );

// Outras sintaxes para ArrowFunctions

// [1] sem corpo nem return

const exibeNome = (nome) => nome;

console.log( exibeNome('Caroline Mateus') );