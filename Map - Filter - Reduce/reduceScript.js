/*Some todos os números de um array */

function somaNumeros(arr) {// função recebendo array
   return arr.reduce(function(prev, current) { //definindo reduce e função de callback
        console.log({ prev }) ; //mostrando total 
        console.log({ current }) ;
        return prev + current;
    })
}

const arr = [0,1,2,3];

console.log(somaNumeros(arr));