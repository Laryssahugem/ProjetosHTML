// pegando o valor da caixa de texto via querySelector
// console.log(document.querySelector('#numero1').value);

// pegando o valor da caixa de texto via getElementById
// console.log(document.getElementById('numero1').value);

// pegando o valor da caixa de texto via getElementsByTagName
// Importante getElementsByTagName retorna um array de tags
// console.log(document.getElementsByTagName('input')[0].value);

// pegando o valor da caixa de texto via getElementsByClassName
// Importante getElementsByClassName retorna um array de elementos
// Com a referida classe
// console.log(document.getElementsByClassName('form-input')[0].value);

// alterando valores de uma tag utilizando o innerHTML
// console.log(document.getElementsByTagName('label')[0].innerHTML='Meu número');

// capturrando valores de uma tag utilizando o innerHTML
// console.log(document.getElementsByTagName('label')[0].innerHTML);




function Calcular() {
    const primeiroNumero = parseFloat (document.formCalculadora.num1.value);
    const segundoNumero = parseFloat (document.formCalculadora.num2.value);
    const operacao = document.formCalculadora.oper.value;
    let resultado;


    if (operacao == '+') {
        resultado = primeiroNumero + segundoNumero;
    }
    
    else if (operacao == '-') {
        resultado = primeiroNumero - segundoNumero;
    }

    else if (operacao == '*') {
        resultado = primeiroNumero * segundoNumero;
    }

    else if (operacao == '/') {
        resultado = primeiroNumero / segundoNumero;
    }



    // janela 
    // alert('O resultado da operação é ' + resultado);

    // console log
    // console.log('O resultado da operação é ', resultado);
    // documento
    // document.write('O resultado da operação é ', resultado);
    const caixaresultado = document.getElementById('resultado');
    caixaresultado.value=resultado;

    const paragrafoResultado=document.getElementById('pResultado');
    paragrafoResultado.innerHTML=resultado;

    //Manipulando CSS via JS 
    paragrafoResultado.style.color ='green';
    paragrafoResultado.style.fontFamily = 'Arial';
    paragrafoResultado.style.fontSize = 'larger';

}
