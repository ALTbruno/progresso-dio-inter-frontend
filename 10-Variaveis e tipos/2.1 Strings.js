/*
Strings:
- Valores declarados entre aspas ou crases
- Comumente utilizada para textos
- Métodos importantes: concatenação, propriedade length, iterabilidade, formatação
*/


let nome = "Bruno";
let sobrenome = "Barbosa";

//typeof(nome);
console.log(typeof(nome)); // retorna string

//nome.concat(sobrenome);
console.log(nome.concat(sobrenome)); // retorna BrunoBarbosa

let concatenado = nome.concat(sobrenome);
console.log(concatenado); // retorna BrunoBarbosa
console.log(concatenado.length); // retorna 12 (tamanho da string)

let exemplo = "Texto exemplo"; // string
console.log(typeof(exemplo));
let exemplo2 = new String("Outro texto") // objeto
console.log(typeof(exemplo2));

let vazio = "";

console.log(nome[0]); // B a primeira letra da string

concatenado = nome + " " + sobrenome; // retorna Bruno Barbosa
console.log(concatenado);

concatenado = nome + "\n" + sobrenome;
console.log(concatenado);

concatenado = `${nome} ${sobrenome}`;
console.log(concatenado);

let frase = "Hello World!";
console.log(frase.split("")); // imprime ['H', 'e', 'l', 'l','o', ' ', 'W', 'o','r', 'l', 'd', '!']
console.log(frase.includes("olá")); // imprime falso pois não existe a palavra 'olá' na frase
console.log(frase.startsWith("H")); // imprime true
console.log(frase.endsWith("!")); // imprime true 

console.log(frase.replace("!", "!!!")); // imprime Hello World!!! (a variavel frase nao foi modificada)

let fraseModificada = frase.replace("!", "!!!");
console.log(fraseModificada);
console.log(frase);

