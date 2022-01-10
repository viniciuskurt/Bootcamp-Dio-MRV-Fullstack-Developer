// Classe conta bancária
class ContaBancaria {
    constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0; // conta inicia com saldo de 0
    //sempre q tiver um get e um setter coloca-se um underline na frente para q possa usar o valor no getter e no setter 
    }

    get saldo() { // retorna saldo
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) { // função sacar valor
        if (valor > this._saldo) { // verifica se possui valor é maior q saldo
            return "Operação Negada - Saldo Insuficiente"
        }
        this.saldo = this._saldo - valor; // atualiza valor na conta

        return this._saldo; // retorna saldo restante
    }

    depositar(valor) { // função depositar valor na conta
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

//Classe Conta Corrente
class ContaCorrente extends ContaBancaria { //extends define classe pai
    constructor(agencia, numero, cartaoCredito) { // herda as propriedades ContaBancaria
        super(agencia, numero); // seta as propriedades na classe pai
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria { // classe conta Poupança 
    constructor(agencia, numero) { // herda as propriedades ContaBancaria
        super(agencia, numero ); // seta as propriedades na classe pai
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria { // classe conta Poupança 
    constructor(agencia, numero) { // herda as propriedades ContaBancaria
        super(agencia, numero); // seta as propriedades na classe pai
        this.tipo = 'universitaria';
    }

    //sobreescrevendo método sacar para limitar a 500 reais
    sacar(valor) {
        if(valor > 500) {
            return 'Operação negada. Total acima do valor permitido!'
        }

        this._saldo = this._saldo - valor; //caso valor permitido, é subtraido valor do saldo
    }
}

