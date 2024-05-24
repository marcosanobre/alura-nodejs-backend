const notas = [9.5, 8, 7.3, 5.5, 9, 6.8, 7];

let somadasNotas = 0;

// Modo 1 
/* notas.forEach( function (nota)  {
    somadasNotas += nota;
});
 */

// Modo 2
notas.forEach( somaNotas );
function somaNotas(nota)  { somadasNotas += nota; };



const media = somadasNotas / notas.length;

console.log( `A media das notas é ${media.toFixed(2)} `);

