let array = ['string', 1, true];
console.log(array);

let arrayDeArray = ['string', 1, true, [1,2,3], ['tele', 'phone'], array];
console.log(arrayDeArray);

// acessando apenas um indice
console.log(arrayDeArray[0]);

//forEach
//arrayforEach(function(item, index){console.log(item, index)});

//objetos
let object = {string: 'palavra', Number: 1, Boolean: true, array, objectInterno: {string: 'objInterno'}};
//visualizar todos os objetos
console.log(object);
//visualizar objeto especifico
console.log(object.Boolean);

// criar variavel com valor de determinado objeto
var string = object.string
console.log(string);

// criar variavel com valores determinados objeto
var {  Number, Boolean} = object;
console.log(Number, Boolean)
