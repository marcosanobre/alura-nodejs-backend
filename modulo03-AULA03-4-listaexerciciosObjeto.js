
/* 
1 - Crie um objeto chamado pessoa que represente informações 
sobre uma pessoa. O objeto deve ter as seguintes 
propriedades: nome e notas. Adicione um método chamado calcularMediaNotas 
ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

Adicione um método chamado classificarDesempenho ao objeto pessoa. 
Este método deve retornar uma categoria de desempenho com base na 
média calculada. Utilize as seguintes categorias:

Desempenho excelente: média >= 9
Bom desempenho: 7.5 <= média entre 7.6 e 8.9
Desempenho regular: 6 <= média entre 6 e 7.5
Desempenho insuficiente: média < 6

Chame o método calcularMediaNotas para calcular a média das notas 
da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a 
categoria de desempenho da pessoa.
*/
const pessoa = {
    nome: 'Maria',
    notas: [8, 7, 9, 10], // lista de notas
  
    calcularMediaNotas: function () {
      const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
      const media = somaNotas / this.notas.length;
      return media.toFixed(2); // Arredondando para duas casas decimais
    },
  
    classificarDesempenho: function () {
      const media = this.calcularMediaNotas();
  
      if (media >= 9) {
        return 'Desempenho excelente';
      } else if (media >= 7.5 && media < 9) {
        return 'Bom desempenho';
      } else if (media >= 6 && media < 7.5) {
        return 'Desempenho regular';
      } else {
        return 'Desempenho insuficiente';
      }
    }
  };
  
  // Calculando e exibindo a média de notas
  const mediaCalculada = pessoa.calcularMediaNotas();
  console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);
  
  // Classificando o desempenho e exibindo a categoria
  const categoriaDesempenho = pessoa.classificarDesempenho();
  console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.\n\n`);
  



/* 
2 - Crie um objeto chamado carro que represente as informações de um veículo. 
O objeto deve ter as seguintes propriedades:

marca (string): marca do carro.
modelo (string): modelo do carro.
ano (number): ano de fabricação do carro.
cor (string): cor do carro.

Utilize o loop for...in para percorrer todas as propriedades do objeto carro 
e imprima no console o nome da propriedade e o seu valor.

Adicione mais propriedades ao objeto carro para representar 
características adicionais do veículo.

Utilize novamente o loop for...in para percorrer todas as propriedades 
atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
*/
// forInObjetos.js
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata"
};

// Utilize o loop for...in para percorrer as propriedades do objeto carro
console.log("Propriedades iniciais do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// Adicione mais propriedades ao objeto carro
carro.cambio = "Automático";
carro.kmRodados = 5000;

// Utilize novamente o loop for...in para percorrer as propriedades atualizadas do objeto carro
console.log("\nPropriedades atualizadas do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}




/*
3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades 
iniciais (marca, modelo, ano, cor) e adicione:

ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
desligar: um método que imprime no console uma mensagem indicando que o carro 
está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
obterDetalhes: um método que retorna uma string contendo todos os detalhes do 
carro (marca, modelo, ano, cor, estado de ligado/desligado).

Em seguida, faça o seguinte:

Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
Chame o método obterDetalhes e imprima no console a string retornada.
*/
console.log('\n\n');

// Definindo o objeto carro com as propriedades iniciais
const carroImportado = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'Prata',
    ligado: true, // Propriedade para indicar se o carro está ligado ou desligado
  
    // Método para ligar o carro
    ligar: function () {
      if (!this.ligado) {
        this.ligado = true;
        console.log('O carro está ligado.');
      } else {
        console.log('O carro já está ligado.');
      }
    },
  
    // Método para desligar o carro
    desligar: function () {
      if (this.ligado) {
        this.ligado = false;
        console.log('O carro está desligado.');
      } else {
        console.log('O carro já está desligado.');
      }
    },
  
    // Método para obter detalhes do carro
    obterDetalhes: function () {
      const estado = this.ligado ? 'ligado' : 'desligado';
      return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
    }
  };
  
  // Testando os métodos
  carroImportado.ligar(); // Tentar ligar o carroImportado quando já está ligado
  carroImportado.desligar(); // Desligar o carroImportado
  carroImportado.desligar(); // Tentar desligar o carroImportado quando já está desligado
  carroImportado.ligar(); // Ligar o carroImportado
  console.log(carroImportado.obterDetalhes()); // Obter detalhes do carroImportado e imprimir no console
  


/*
4 - No objeto carro, adicione uma nova propriedade chamada 
placa representando a placa do veículo. Defina a propriedade 
placa como não enumerável, para que ela não seja listada 
ao percorrer as propriedades do objeto.

Utilize um loop for...in para percorrer as propriedades do objeto 
carro e imprima no console apenas as propriedades enumeráveis.

Utilize o método Object.keys() para obter um array contendo apenas 
as chaves enumeráveis do objeto carro e imprima no console esse array.

Tente acessar a propriedade placa diretamente usando carro.placa 
e imprima no console o resultado obtido.
*/
// enumeraveisObjeto.js
carroImportado.placa = "ABC1234";

// Defina a propriedade placa como não enumerável
Object.defineProperty(carroImportado, "placa", { enumerable: false });

// Utilize um loop for...in para percorrer as propriedades enumeráveis do objeto carroImportado
console.log("\n\nPropriedades Enumeráveis do carroImportado:");
for (let propriedade in carroImportado) {
    console.log(`${propriedade}: ${carroImportado[propriedade]}`);
}

// Utilize Object.keys() para obter um array com as chaves enumeráveis do objeto carroImportado
const chavesEnumeraveis = Object.keys(carroImportado);
console.log("\nChaves Enumeráveis do carroImportado:");
console.log(chavesEnumeraveis);

// Tente acessar a propriedade placa diretamente e imprima o resultado obtido
console.log("\nAcesso direto à propriedade placa:");
console.log(carroImportado.placa);



/*
5 - Crie um novo objeto chamado carroNovo para 
representar as informações de um novo carro. 
O objeto deve ter as seguintes propriedades:

marca (string): marca do novo carro.
modelo (string): modelo do novo carro.
ano (number): ano de fabricação do novo carro.
cor (string): cor do novo carro.

Utilize o operador de espalhamento (...) para 
criar um novo objeto chamado carroComNovosDetalhes 
que herde todas as propriedades do objeto carro 
e adicione as propriedades do objeto carroNovo.

Imprima no console o objeto carroComNovosDetalhes 
para verificar as informações do carro com os novos detalhes.

Modifique o valor de uma propriedade no objeto 
carroComNovosDetalhes e imprima novamente o objeto 
no console para confirmar as alterações.
*/
// spreadObjeto.js
carro.ligado = false;

const carroNovo = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
    cor: "Azul"
};

// Utilize o operador spread para criar um novo objeto com as propriedades de carro e carroNovo
const carroComNovosDetalhes = { ...carro, ...carroNovo };

// Imprima no console o objeto carroComNovosDetalhes
console.log("\n\nCarro com Novos Detalhes:");
console.log(carroComNovosDetalhes);

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes
carroComNovosDetalhes.modelo = "Accord";

// Imprima novamente no console o objeto carroComNovosDetalhes
console.log("\nCarro com Detalhes Modificados:");
console.log(carroComNovosDetalhes);

