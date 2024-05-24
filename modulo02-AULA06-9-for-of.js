const notas = [9.5, 8, 7.3, 5.5, 9, 6.8, 7];

let somadasNotas = 0;

for (let nota of notas) {
    somadasNotas += nota;
    console.log( 'Soma das notas:', somadasNotas );
}

const media = somadasNotas / notas.length;
console.log( `A media das notas é ${media.toFixed(2)} `);

