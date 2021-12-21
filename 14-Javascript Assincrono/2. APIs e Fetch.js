/*
API: Application Programming Interface

Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end

Você consegue acessá-la por meio de URLs

É muito comum que APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando os recebemos.

*/

// fetch

fetch(url, options)
	.then(response => response.json())
	.then(json => console.log(json))

// retorna uma Promise


// Operações no banco (POST, GET, PUT, DELETE, etc)
fetch('https://endereco-da-api.com/', {
	method: 'GET',
	cache: 'no-cache',
})
	.then(response => response.json())
	.then(json => console.log(json))
// retorna uma Promise

fetch('https://endereco-da-api.com/', {
	method: 'POST',
	cache: 'no-cache',
	body: JSON.stringify(data)
})
	.then(response => response.json())
	.then(json => console.log(json))
// retorna uma Promise
