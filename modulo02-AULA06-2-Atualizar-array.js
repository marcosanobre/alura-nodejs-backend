const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leonardo'];

listaEstudantes.splice(1, 2, 'Rodrigo');

console.log(listaEstudantes);

const animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão'];

animaisDoAquario.splice(1,0,'Sardinha'); // Significa: insere sardinha na posição 1
console.log(animaisDoAquario);

animaisDoAquario.splice(3,2,'atum'); // Significa: na posição 3 - deleta 2 e acrescenta atum a partir da 3 inclusive
console.log(animaisDoAquario);
