//console.log('Teste');

//criando função
function returnEvenValues(array) {
    let evemNums = [];
    for(let i = 0; i < array.length; i++ ) {
    if(array[i] % 2 === 0) {
        evemNums.push(array[i]);
        }else{
            console.log(`${array[i]} não é par`);
        }
    }
    console.log('os número pares são: ', evemNums);
}

let array = [1, 2, 4, 5, 7, 8];
returnEvenValues(array);