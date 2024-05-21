const listaEstudantes = [
    'João', 'Mariana', 'Marcelo', 'Camilo', 'Deusdete', 'Francisca', 'Marcos', 'Paulo',
    'Pedro', 'Soraya', 'Julianna', 'Rosa', 'Vicente', 'Norberto', 'Constantino', 'Ronie',
    'Roque', 'Isabela', 'Vinicius', 'Wyller', 'Walker', 'Leonardo'
];

const sala1 = listaEstudantes.slice( 0, listaEstudantes.length/2 );

console.log( sala1 );

const sala2 = listaEstudantes.slice( listaEstudantes.length/2 );

console.log( sala2 );
