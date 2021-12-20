/*
1. Crie uma função que receba o array alunos um número que irá representar a média final
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais a média final
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno
*/

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },
];

function alunosAprovados(arr, media) {

    let aprovados = [];

    for(let i=0; i<arr.length; i++) {

        // if(arr[i].nota >= media) {
        //     aprovados.push(arr[i].nome);
        // }

		const {nota, nome} = arr[i]
		
        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6));



/*
Dada a função calculaIdade utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade
*/
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.name} terá ${this.age + anos} anos de idade.`;
}

const pessoa1 = {
	name: 'Maria',
	age: 30,
};

const pessoa2 = {
	name: 'Carla',
	age: 26,
};

const animal = {
	name: 'Fiona',
	age: 5,
	raca: 'Pug',
};

console.log(calculaIdade.call(pessoa2, 30)); // Daqui a 30 anos, Carla terá 56 anos de idade.
console.log(calculaIdade.apply(animal,[5])); // Daqui a 5 anos, Fiona terá 10 anos de idade.