// Reduce
// Some todos os números de aum array
const arr = [1, 2, 3, 4];

function somaNumeros(arr) {
	return arr.reduce(function(prev, current) {
		// console.log({prev});
		// console.log({current});
		return prev + current;
	}); //}, 0);
};

console.log(somaNumeros(arr)); // 10

// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
let saldo = 15;

const produtos = [
	{
		name: 'café',
		price: 7.99,
	},
	{
		name: 'agua',
		price: 3.99,
	},
];

function calculaSaldo(saldo, produtos) {
	return produtos.reduce(function (prev, current, index) {
		console.log('rodada ', index + 1);
		console.log({prev});
		console.log({current});
		return prev - current.price;

	}, saldo);
};

console.log(calculaSaldo(saldo, produtos)); // 3.0199999999999996
