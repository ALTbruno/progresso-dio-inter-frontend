/*
Arrays:
- Lista iterável de elementos

*/

let array = [1, 2, 3];
console.log(array);
array.push(0); // adiciona 0 no final do array
console.log(array);
array.unshift(5); // adiciona 5 no inicio do array
console.log(array);
array.pop(); // remove 0 (ultimo elemento do array)
console.log(array);
array.shift(); // remove 5 (primeiro elemento do array)
console.log(array);

for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

console.log(array.includes(3)); // true
console.log(array.every(item => item === 3)); // false
console.log(array.some(item => item === 3)); // true

console.log(array.reverse()); // [ 3, 2, 1 ]