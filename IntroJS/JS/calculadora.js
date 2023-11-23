//1 Solicitar dois números
//2 Solicitar a operação
//3 Realizar o cálculo
//4 Mostrar o resultado

let resultado;
let mensagem = 'O Resultado da operação é ';
let num1 = parseFloat(prompt('Digite o primeiro número:'));
let num2 = parseFloat(prompt('Digite o segundo número:'));
let operacao = prompt('Digite a operação: [+] para Adição | [-] para Subtração | [x] para Multiplicação | [/] para Divisão');

if (isNaN(num1) == true || isNaN(num2) == true) {
alert('Operação inválida');
resultado = 'Sinto muto, operação inválida';   
}
else if (operacao == '+') {
    resultado = num1 + num2;
}
else if (operacao == '-') {
    resultado = num1 - num2;
}
else if (operacao == 'x') {
    resultado = num1 * num2;
}
else if (operacao == '/') {
    resultado = num1 / num2;
}
else{
    resultado = 'Operação inválida! Digite uma operação válida.';
}

document.write('<p class ="resultado">', resultado);
document.write('</p>');