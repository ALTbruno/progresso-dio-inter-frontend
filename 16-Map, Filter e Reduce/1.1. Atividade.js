// Map
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele
const maca = {
	value: 2,
};

const laranja = {
	value: 3,
};

function mapComThis(arr, thisArg) {
	return arr.map(function(item) {
		return item * this.value;
	}, thisArg)
}

const nums = [1, 2];

console.log(mapComThis(nums, maca)); // [ 2, 4 ]
console.log(mapComThis(nums, laranja)); // [ 3, 6 ]


const nums2 = [2, 4, 6, 8, 10];

function mapSemThis(arr) {
	return arr.map(function (item) {
		return item * 2;
	});
};

console.log(mapSemThis(nums2)); // [ 4, 8, 12, 16, 20 ]
