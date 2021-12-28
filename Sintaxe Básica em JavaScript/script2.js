var VouF = false;
console.log(typeof(VouF));
//método typeoff() mostra o tipo da variável

//Escopo global
var escopoGlobal = 'global';
console.log(escopoGlobal);

//Escopo local
function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();