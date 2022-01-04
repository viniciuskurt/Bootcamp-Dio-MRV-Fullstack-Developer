const alunos = [
    {
        nome: 'Vinicius',
        nota: 10,
        turma: 4,
    },
    {
        nome: 'Luísa',
        nota: 5,
        turma: 9,
    },
    {
        nome: 'Henrique',
        nota: 7,
        turma: 2,
    },
    {
        nome: 'Tiago',
        nota: 4,
        turma: 5,
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

 console.log(alunosAprovados(alunos, 5))