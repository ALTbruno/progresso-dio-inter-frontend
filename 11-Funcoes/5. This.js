/*
A palavra reservada this é uma referência de contexto
 */

const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
    //Neste exemplo, this refere-se ao objeto pessoa
};

pessoa.fullName(); // André Soares
pessoa.getId(); // 1


/*

O valor de this pode mudar de acordo com o lugar no código onde foi chamada:

- Em um objeto (método): Próprio objeto dono do método

- Sozinha: Objeto global(em navegadores, window)

- Função: Objeto global

- Evento: Elemento que recebeu o evento

*/


// Manipulando seu valor
const person = {
    nome: "Miguel"
};

const animal = {
    nome: "Murphy"
};

function getSomething() {
    console.log(this.nome); // nome de quem???
}

getSomething.call(person); // nome de person
getSomething.call(animal); // nome de animal
getSomething.apply(person); // nome de person
getSomething.apply(animal); // nome de animal

const myObj = {
    num1: 1,
    num2: 4
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); // 11
soma.apply(myObj, [1, 5]); // 11


// Bind
// Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro
const retornaNomes = function () {
	return this.nome;
}

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno(); // Bruno
