// Forma CLASSICA

console.log( !estudanteReprovou( 7, 6) ? 'Reprovou por faltas' : 'Aprovou' );


function estudanteReprovou( notalFinal, faltas) {
    if (notalFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

// Expressão de Funcao
// Atribuindo uma função como valor de uma variável

const estudanteReprovouExpr = function ( notalFinal, faltas) {
    if (notalFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log( estudanteReprovouExpr(6, 5) );

console.log( estudanteReprovouExpr(8, 2) );

// A diferença da forma CLASSICA é que na expressão-de-funcao
// o uso NAO PODE SE DAR antes da declaração
// Ja na forma clássica, todas as funções de um programa são
// "puxadas" pra cima - para antes de quaquer execução.
// Veja na execução do inicio, que a declaração está apos o uso.
// Este mecanismo da linguagem é chamado de HOISTING (içar)

