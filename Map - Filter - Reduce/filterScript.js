/*Filtre e retorne todos os números pares de um array*/

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 == 0;
    //return item % 2 !== 0; diferente de pares
}

const meuArray = [1,23,55,67,30,2,4];

console.log(filtraPares(meuArray));