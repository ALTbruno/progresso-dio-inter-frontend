// FUNÇÃO
//Estrutura
function nome(parametros) {
    // instruções
    return; // valor do retorno
}



// FUNÇÃO ANÔNIMA
const soma = function(a, b) {
    return a + b;
}
soma(1, 2) //3


// FUNÇÃO AUTOINVOCÁVEL
(
    function() {
        let name = "DIO";
        return name;
    }
)();


(
    function(a, b) {
        return a + b;
    }
)(1, 2); //3

const somaAutoinvocavel = (
    function(a, b) {
        return a + b;
    }
)(1, 2); //3


// CALLBACK
const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const sum = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSum = calc(sum, 1, 2);
const resultSub = calc(sub, 1, 2);
