const salaJS = [9, 5, 8, 7, 3, 6, 5, 9];
const salaJava = [9, 8, 7, 3, 8, 8];
const salaPython = [4, 6, 8, 10, 1];

function calculaMedia( listaDeNotas ) {
    const somaDasNotas = listaDeNotas.reduce(

        (acumulador, nota) => { return acumulador + nota; } ,

        0
    );

    const media = somaDasNotas / listaDeNotas.length;

    return media.toFixed(2);
};
console.log(  calculaMedia(salaJS) );
console.log(  calculaMedia( salaJava ) );
console.log(  calculaMedia(salaPython) );


// Otimizando a expressão de função no REDUCE

function calculaMedia1( listaDeNotas ) {
    const somaDasNotas = listaDeNotas.reduce( (acumulador, nota) => acumulador + nota, 0 );
    const media = somaDasNotas / listaDeNotas.length;
    return media.toFixed(2);
};
console.log( '\n\n', calculaMedia1(salaJS) );
console.log(  calculaMedia1( salaJava ) );
console.log(  calculaMedia1(salaPython) );

