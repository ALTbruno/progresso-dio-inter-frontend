// Filter
// Filtre e retorne todos os números pares de um Array
const meuArray = [1, 23, 55, 67, 30, 2, 4];

function callback(item) {
	return item % 2 === 0;
};

function filtraPares(arr) {
	return arr.filter(callback);
};

console.log(filtraPares(meuArray)); // [ 30, 2, 4 ]

