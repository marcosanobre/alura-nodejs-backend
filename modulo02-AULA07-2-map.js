const notas = [9.5, 8, 7.3, 5.5, 9, 6.8, 7];

// Modo 1 => função de callback tradicional
/* 
const notasAtualizadas = notas.map (
    function (nota) {
        return nota + 1;
    }
);
*/

// Modo 2 => função de expressão como funcao de callback 
// dessa forma , gera nota > 10
//const notasAtualizadas = notas.map ( nota => nota + 1 );
const notasAtualizadas = notas.map ( nota => nota+1 > 10 ? 10 : nota + 1 );



console.log( notasAtualizadas );

