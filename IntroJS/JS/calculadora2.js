function calcular() {
    const primeiroNumero = document.formCalculadora.num1.value;
    const segundoNumero = document.formCalculadora.num2.value;
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
    alert('O resultado da operação é ', resultado);

    // console log
    console.log('O resultado da operação é ', resultado);
    // documento
    document.write('O resultado da operação é ', resultado);
}