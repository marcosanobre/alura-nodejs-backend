
const estudante = {
    nome: 'Jose Mane',
    idade: 32,
    cpf: '12345678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['+5561999999999','+5561988888888'],
    media: 7.5,
    enderecos : [
        {rua: 'Carmem Souza', numero: 33, cep: '71.540-133', complemento: 'Praça Teodoro, casa 18'},
        {rua: 'Japao da Cruz', numero: null, cep: '70.054-321', complemento: 'Alameda dos Zumbis, casa 211'}
    ],
    /* NAO USE ARROW FUNCTION */
    estaAprovado: function( mediaBase) {
        return this.media >= mediaBase ? true : false
    } 
};

console.log( estudante.estaAprovado(7), '\n\n' );

