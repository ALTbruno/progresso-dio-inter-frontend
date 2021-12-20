/*
- Uma coleção de arrays no formato [chave, valor]
- Pode ser iterado por um loop for...of
*/

const myMap = new Map();

// Métodos
myMap.set('apple', 'fruit'); // Map(1) {"apple" => fruit}
myMap.get(apple); // "fruit"
myMap.delete('apple'); // tru
myMap.get(apple); // undefined

/*
MAP VS OBJETO
- Maps podem ter chaves de qualquer tipo; (Objetos são strings)
- Maps possuem a propriedade length;
- Maps são mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido;
- Os valores tem o mesmo tipo.
*/
