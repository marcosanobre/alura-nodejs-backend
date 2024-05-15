// let estudante;
// estudante = 'Jose Amadeu';

let estudante = 'AnaMaria';

if (1 > 0) {
    const estudante = 'Caroline';
    console.log(estudante);
}

console.log( estudante );

if (true) {
    let num1 = 10;
    var num2 = 30;    
}

// console.log(num1);

console.log(num2);

/*
Variáveis declaradas com VAR não seguem a regra de escopo bloco
Elas serão consideradas globais e poderão ser acessadas fora do bloco
Observe :
*/
if(true ) {
    var nome = 'Ana';
}
console.log(nome); // 'Ana' 
// A falta de controle de escopo que VAR causa, foi o motivo de seu abandono



