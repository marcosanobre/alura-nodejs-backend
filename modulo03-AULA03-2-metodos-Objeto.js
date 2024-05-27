
const estudante = {
    nome: 'Jose Maria',
    idade: 33,
    solteiro: true,
    bolsista: false,
    hobbies: ['Caminhada', 'Mergulho', 'Tenis'],
    cpf: '333.333.333-99',
    telefones: ['+55 (61) 988887722', '+55 (81) 997978181'],
    endereco: [
        { rua:'Rua dos Zumbis', cidade: 'Sao Paulo', estado: 'Sao Paulo' },
        { rua:'Alameda Zumbi Loko', cidade: 'Maranguape', estado: 'Ceará' }
    ]
};

const chavesObjeto = Object.keys(estudante);

if ( !chavesObjeto.includes('enderecos') ) {
    console.error('Esta propriedade não existe no objeto.\n\n');
}

console.log( Object.entries(estudante) );