
/* 
1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. 
O arquivo pode representar, por exemplo, dados de produtos, 
usuários ou qualquer outra informação que você deseje.

Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função 
require() para importar o conteúdo do arquivo dados.json.

Imprima no console o conteúdo importado utilizando a função console.log().

Acesse diferentes propriedades do objeto importado e 
imprima no console para verificar o acesso aos dados.
*/
// utilizarRequire.js
const dados = require('./dados.json');

// Imprime no console o conteúdo importado
console.log("Conteúdo importado de dados.json:");
console.log(dados);

// Acessa diferentes propriedades do objeto importado e imprime no console
console.log("\nAcesso aos dados:");
console.log("Produtos:", dados.produtos);
console.log("Usuários:", dados.usuarios);



/* 
3 - Crie um objeto JavaScript representando informações de um produto. 
O objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do produto.
nome (string): nome do produto.
preco (number): preço do produto.

Converta o objeto produto para uma string utilizando 
JSON.stringify() e imprima no console a string resultante.
*/
const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
};

console.log( '\n\nProduto: ', JSON.stringify(produto) );



/* 
4 - Crie um arquivo chamado animais.json, contendo informações 
fictícias em formato JSON. O arquivo pode representar dados de animais, 
incluindo pelo menos três elementos no array.
Crie um arquivo chamado manipulacaoJson.js. 
Dentro deste arquivo, realize as seguintes operações:

a) Leia o conteúdo do arquivo animais.json.

b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

d) Modifique o habitat de um animal existente no array de animais.

e) Remova um animal do array de animais.

f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

g) Imprima no console o objeto JavaScript resultante das operações.
*/

// manipulacaoJson.js
const objetoAnimais = {
    "animais": [
        {
            "id": 1,
            "nome": "Leão",
            "tipo": "Mamífero",
            "habitat": "Savana"
        },
        {
            "id": 2,
            "nome": "Pinguim",
            "tipo": "Ave",
            "habitat": "Pólo Sul"
        },
        {
            "id": 3,
            "nome": "Cobra",
            "tipo": "Réptil",
            "habitat": "Floresta Tropical"
        },
        {
            "id": 4,
            "nome": "Arara Azul",
            "tipo": "Ave",
            "habitat": "Pantanal"
        },
        {
            "id": 5,
            "nome": "Jacaré",
            "tipo": "Reptil",
            "habitat": "Pantanal"
        }
    ]
};

// Adiciona um novo animal ao array de animais
const novoAnimal = {
    "id": 6,
    "nome": "Elefante",
    "tipo": "Mamífero",
    "habitat": "Savana"
};
objetoAnimais.animais.push(novoAnimal);

// Modifica o habitat de um animal existente no array de animais
const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2);
if (animalParaModificar) {
    animalParaModificar.habitat = "Oceano Antártico";
}

// Remove um animal do array de animais
const indiceAnimalRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    objetoAnimais.animais.splice(indiceAnimalRemover, 1);
}

// Converte o objeto modificado para uma string JSON
const novaStringJsonAnimais = JSON.stringify(objetoAnimais, null, 2);

// Imprime no console o objeto JavaScript resultante das operações
console.log("\n\nObjeto JavaScript Resultante das Operações:");
console.log(objetoAnimais);





/* 
5 - Crie um objeto JavaScript representando informações de uma pessoa. 
O objeto deve conter as seguintes propriedades:

id (number): identificador da pessoa.
nome (string): nome da pessoa.
idade (number): idade da pessoa

Crie uma função que receba um objeto JavaScript e retorne um novo objeto. 
Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

Modifique a cópia do objeto obtido através da função, 
adicionando ou alterando pelo menos uma propriedade.

Imprima no console ambos os objetos (o original e o modificado) para 
verificar que as alterações feitas no objeto modificado 
não afetaram o objeto original.
*/

// copiarObjetoJson.js
// Função para copiar objetos JSON
function copiarObjetoJson(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

// Criação do objeto original (pessoa)
const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
};

// Utiliza a função para criar uma cópia do objeto original
const pessoaModificada = copiarObjetoJson(pessoaOriginal);

// Modifica a cópia do objeto (pessoa modificada)
pessoaModificada.idade = 35;

// Imprime no console ambos os objetos
console.log("\n\nObjeto Original (Pessoa):");
console.log(pessoaOriginal);

console.log("Objeto Modificado (Pessoa):");
console.log(pessoaModificada)





