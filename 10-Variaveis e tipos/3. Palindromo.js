/** 
Palíndromo é toda palavra ou frase que pode ser lida de trás pra frente e que, independente da direção, mantém o seu sentido.
*/

function verificaPalindromo(string) {

	if(!string) return "String inexistente";

	return string.split("").reverse().join("") === string;

}

console.log(verificaPalindromo("ama")); // true
console.log(verificaPalindromo("amar")); // false


function verificaPalindromo2(string) {
	
	if(!string) return "String inexistente";

	for(let i=0; i<string.length/2; i++) {
		if(string[i] !== string[string.length -1 -i]){
			return false;
		}
	}

	return true;

}

console.log(verificaPalindromo2("abba")); // true
