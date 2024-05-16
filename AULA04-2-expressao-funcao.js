// Forma CLASSICA

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