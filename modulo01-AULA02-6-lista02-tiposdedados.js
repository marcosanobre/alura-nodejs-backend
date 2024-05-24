
// [1]

let frase = 'Esta é uma string curta.';
console.log( frase.length, frase.toUpperCase(), '\n\n' );

// [2]

let umaVar = null;
let doisVar;
console.log( umaVar, doisVar, '\n\n' );

// [3]

let varNum = 11;
let varStr = 'Uma String';
let varBool = false;
let msg = `Os valores das variáveis são: varNum=> ${varNum}, varStr=> '${varStr}' e varBool=> ${varBool}`;
console.log( msg, '\n\n' );

// [4]

let numerica = 117;
let vstring = '18666ABC';
console.log( numerica, String(numerica), typeof String(numerica), '\n\n', vstring, parseInt(vstring), Number(vstring), typeof Number(vstring), '\n\n' );

// [5]

let umaFrase = 'Esta string contem duas palavras: Amor e Ódio';
console.log( umaFrase, 'tamanho da frase', umaFrase.length, '\n' );
console.log( 'UpperCase de pedaço:', umaFrase.substring(umaFrase.indexOf('Amor')).toUpperCase(), '\n\n' );


