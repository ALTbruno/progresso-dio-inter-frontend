// Assíncrono: Que não ocorre ou não se efetiva ao mesmo tempo

// Por padrão o Javascript roda de maneira síncrona.

/*
PROMISES
Objeto de processamento assíncrono

Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada.

Pode ter 3 estados: Pending, Fulfilled, Rejected
*/

// const myPromise = new Promise((resolve, reject) => {
// 	window.setTimeout(() => {
// 		resolve(console.log('Resolvida!'));
// 	}, 2000);
// });

// await myPromise
// 		.then((result) => result + ' passando pelo then')
// 		.then((result) => result + ' e agora acabou')
// 		.catch((err) => console.log(err.message));

// Após 2 segundos, retornará o valor

// async function resolvePromise() {
// 	const myPromise = new Promise((resolve, reject) => {
// 		window.setTimeout(() => {
// 			resolve(console.log('Resolvida!'));
// 		}, 3000);
// 	});
	
// 	const resolved = await myPromise
// 			.then((result) => result + ' passando pelo then')
// 			.then((result) => result + ' e agora acabou')
// 			.catch((err) => console.log(err.message));

// 	return resolved;
// };

async function resolvePromise() {
	const myPromise = new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve(console.log('Resolvida!'));
		}, 3000);
	});
	
	let result;
	
	try{
		result = await myPromise
			.then((result) => result + ' passando pelo then')
			.then((result) => result + ' e agora acabou')
	} catch(err) {
		result = err.message;
	}

	return result;
};
