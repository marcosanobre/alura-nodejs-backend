const nomes = ['Joao','Ana','Clara','Maria','Joao','Maria','Joao'];

const nomesSemDup = new Set( nomes );

console.log( nomesSemDup );

// SET não é Array
// Assim para "converter" um "conjunto" (set) em Array
// Usa-se o Operador de Espalhamento

const novaListaDeNomes = [ ...nomesSemDup ];

console.log( novaListaDeNomes );

// Reduzindo código 

const novaListaDeNovosNomes = [ ...new Set(nomes), 'Julianna' ];

console.log( novaListaDeNovosNomes );

