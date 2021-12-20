// FOR
// Loop dentro de elementos iteráveis (arrays, strings)

function multiplicaPorDois(arr) {
	
	let multiplicados = [];

	for(let i=0; i<arr.length; i++) {
		multiplicados.push(arr[i]*2);
	}

	return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros); // [ 4, 66, 912, 712, 80 ]

// FOR...in
// Loop entre propriedades enumeráveis de um objeto
function forInExemplo(obj) {

	for(prop in obj) {
		console.log(prop);
	}
}

const meuObjeto = {
	nome: "João",
	idade: "20",
	cidade: "Salvador"
}

forInExemplo(meuObjeto); // nome idade cidade

function forInExemplo2(obj) {

	for(prop in obj) {
		console.log(obj[prop]);
	}
}

forInExemplo2(meuObjeto); // João 20 Salvador

// FOR...of
// Loop entre estruturas iteráveis (arrays, strings)
function logLetras(palavra) {

	for(letra of palavra) {
		console.log(letra);
	}
}

const palavra = "abacaxi";
logLetras(palavra); // a b a c a x i

function logNumeros(nums) {

	for(num of nums) {
		console.log(num);
	}
}

const nums = [30, 20, 233, 2];
logLetras(nums); // 30 20 233 2


// WHILE
// Executa instruções até que a condição se torne falsa
function exemploWhile() {
	
	let num = 0;

	while(num <= 5){
		console.log(num);
		num++
	}
}

exemploWhile(); // 0 1 2 3 4 5

// DO...while
// Executa intruções até que a condição se torne falsa
// Porém a primeira execução sempre ocorre
function exemploDoWhile() {

	let num = 0;

	do {
		console.log(num);
		num++
	}while(num <=5)
}

exemploDoWhile(); // 0 1 2 3 4 5

function exemploDoWhile2() {

	let num = 6;

	do {
		console.log(num);
		num++
	}while(num <=5)
}

exemploDoWhile2(); // 6
