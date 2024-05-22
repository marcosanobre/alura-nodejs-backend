const notas = [9.5, 8, 7.3, 5.5, 9, 6.8, 7];

let somadasNotas = 0;

for (let index = 0; index < notas.length; index++) {
    somadasNotas += notas[index];

    console.log( index , notas[index], somadasNotas );
}

const media = somadasNotas / notas.length;
console.log( `A media das notas é ${media.toFixed(2)} `);

