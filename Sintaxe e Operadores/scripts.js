function comparaNum(n1, n2) {
    const saoIguais = n1 === n2;
    const soma = n1 + n2; 

    //   if(saoIguais) {
    //       return "São iguais";
    //  }
    // return "Não são iguais";

            // ou condicional ternario:

    return saoIguais ? "São iguais" : "Não são iguais";
}

console.log(comparaNum(20, 20));