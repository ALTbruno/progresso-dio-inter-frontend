/*
OOJS: Javascript Orientado a Objetos

Todos os objetos Javascript herdam propriedades e métodos de um prototype.
O objeto Object.prototype está no topo desta cadeia.

*/

// Classes

//antes
var Meal = function(food) {
	this.food = food;
}

Meal.prototype.eat = function() {
	return '😋'
}

//agora
class Meal {
	constructor (food) {
		this.food = food
	}

	eat() {
		return '😋'
	}
}

// Javascript não possui classes nativamente. Todas as classes são objetos e a herança se dá por protótipos.

// constructor; getter e setter; super;