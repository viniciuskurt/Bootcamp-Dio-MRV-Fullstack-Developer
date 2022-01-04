function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade `;
}

const pessoa1 = { 
    nome: "Maria",
    idade: 30
};

const pessoa2 = { 
    nome: "Mel",
    idade: 25
};

const animal = {
    nome: "Sindy",
    idade: 5,
    raca: "Poodle"
};

console.log(calculaIdade.call(pessoa2, 30));