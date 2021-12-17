let num1 = parseFloat(prompt('Insira o primeiro número'));
let num2 = parseFloat(prompt('Insira o segundo número'));

function comparaParametros(num1, num2) {
    
    let saoIguais = '';

    if(num1 !== num2){
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function somaeCompara(num1, num2){

    let soma = num1 + num2;

    let comparaSomaCom10;
    let comparaSomaCom20;

    if(soma > 10){
        comparaSomaCom10 = 'maior que';
    }else if(soma < 10){
        comparaSomaCom10 = 'menor que';
    }else{
        comparaSomaCom10 = 'igual a';
    }
    
    if(soma > 20){
        comparaSomaCom20 = 'maior que';
    }else if(soma < 20){
        comparaSomaCom20 = 'menor que';
    }else{
        comparaSomaCom20 = 'igual a';
    }

    return `Sua soma é ${soma}, que é ${comparaSomaCom10} 10 e ${comparaSomaCom20} 20.`;
}

function comparaNumeros(num1, num2){
  
    const comparaParametros2 = comparaParametros(num1, num2);
    const somaeCompara2 = somaeCompara(num1, num2);

    return alert(`${comparaParametros2} ${somaeCompara2}`)
}

comparaNumeros(num1, num2);
