/*Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada */

const lista = [
    {
        nome: 'chocolate',
        preco: 5
    },
    {
        nome: 'bolo',
        preco: 15
    },
    {
        nome: 'pudim',
        preco: 11
    },
];

saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco; 
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));