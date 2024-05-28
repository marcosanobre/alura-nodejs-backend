
const estudante = {
    nome: 'Jose Maria',
    idade: 33,
    solteiro: true,
    bolsista: false,
    hobbies: ['Caminhada', 'Mergulho', 'Tenis'],
    cpf: '333.333.333-99',
    telefones: ['+55 (61) 988887722', '+55 (81) 997978181'],
    enderecos: [
        { rua:'Rua dos Zumbis', cidade: 'Sao Paulo', estado: 'Sao Paulo' },
        { rua:'Alameda Zumbi Loko', cidade: 'Maranguape', estado: 'Ceará' }
    ]
};

// Montar um OBJETO com partes de outro
const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0],
    cep: '90.111-222'
};

console.log( dadosEnvio );


