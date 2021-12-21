/*
- Cria um novo array
- Não modifica o array original

array.filter(callback, thisArg)
- Callback: função a ser executada em cada elemento
- thisArg (opcional):  valor de ‘this’ dentro da função de callback

*/

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

frutas.filter((fruta) => fruta.includes('maçã')); // [ 'maçã fuji', 'maçã verde' ]
