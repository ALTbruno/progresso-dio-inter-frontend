/*
Objetos:
- Estrutura tipo "chave e valor"

*/

let objeto = {};
console.log(typeof(objeto)); // object
console.log(objeto); // {}  - objeto vazio

objeto.name = "Bruno";
console.log(objeto); // { name: 'Bruno' }

objeto.age = 25;
console.log(objeto); // { name: 'Bruno', age: 25 }

console.log(Object.values(objeto)); // [ 'Bruno', 25 ]
console.log(Object.keys(objeto)); // [ 'name', 'age' ]

let pessoa = {
    name: "Bruno",
    age: 25,
    address: "***"
}
console.log(pessoa); // { name: 'Bruno', age: 25, address: '***' }
console.log(pessoa.address) // ***
console.log(pessoa["address"]); // ***
pessoa["numberOfSiblings"] = 3;

console.log(pessoa); // { name: 'Bruno', age: 25, address: '***', numberOfSiblings: 3 }

