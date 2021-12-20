function numeroPositivo(num) {
    
    let resultado;

    if(num < 0) {
        resultado = false;
    }else{
        resultado = true;
    }

    return resultado;
}

numeroPositivo(2); // true
numeroPositivo(-9); // false

function numPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo) {
        return "Esse número é negativo"
    }else if(!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10"
    }

    return "Esse número é positivo"
}

numPositivo(2); // Esse número é positivo
numPositivo(-2); // Esse número é negativo
numPositivo(40); // Esse número é positivo e maior que 10


/*
SWITCH
- Equivale a uma comparação de tipo e valor (===)
- Sempre precisa de uma valor "default"
- Ideal para quando se precisa comparar muitos valores
*/
function getAnimal(id) {
    
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

getAnimal(1); // cão
getAnimal(4); // peixe
getAnimal("1"); // peixe
