/*
Throw, Try/Catch e Finally

*/

function verificaPalindromo(string) {

	if(!string) return "String inválida";

	return string === string.split("").reverse().join("");

}

console.log(verificaPalindromo());


function verificaPalindromoComThrow(string) {

	if(!string) throw "String inválida";

	return string === string.split("").reverse().join("");

}

console.log(verificaPalindromoComThrow());


// Try...catch
function tryCatchExemplo(string) {
    try{
        verificaPalindromoComThrow(string);
    }
    catch(e) {
        console.log(e);
    }
}

tryCatchExemplo('');

function tryCatchExemplo2(string) {
    try{
        verificaPalindromoComThrow(string);
    }
    catch(e) {
        throw(e);
    }
}

tryCatchExemplo2('');


// Finally
function tryCatchExemplo3(string) {
    try{
        return verificaPalindromoComThrow(string);
    }
    catch(e) {
        throw(e);
    }
	finally{
		console.log("A string enviada foi: " + string);
	}
}

tryCatchExemplo3('');
