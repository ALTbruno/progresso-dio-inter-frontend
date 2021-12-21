/*
Na geometria Euclidiana, um polígono regular é um polígono em que todos os ângulos são iguais e todos os lados tem o mesmo comprimento. Um polígono simples é aquele cujos segmentos de reta não se interceptam. Abaixo pode-se ver vários mosaicos feitos por polígonos regulares.
https://www.urionlinejudge.com.br/gallery/images/contests/C_1.jpg

Você deve escrever um programa que, dados o número e o comprimento dos lados de um polígono regular, mostre seu perímetro.

Entrada
A entrada tem dois inteiros positivos: N e L, que são, respectivamente, o número de lados e o comprimento de cada lado de um polígono regular (3 ≤ N ≤ 1000000 and 1 ≤ L ≤ 4000).

Saída
A saída é o perímetro P do polígono regular em uma única linha.

Exemplos de Entrada
3 1
9 8
1000000 1000

Exemplos de Saída
3
72
1000000000

Prova 1 de Programação de Computadores da UNILA (2015/2)

*/

let lines = '3 1'.split("\n");
let line = lines.shift().split(' ').map(Number);

let p = line.reduce(function(n, l) {
	return n * l;
});

console.log(p);

