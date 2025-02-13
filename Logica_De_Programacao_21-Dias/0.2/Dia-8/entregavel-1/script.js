///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!

function Calculadora(num1 , num2, operador){
  let numero1 = parseInt(num1)
  let numero2 = parseInt(num2)
  let resultado 

  switch (operador) {
    case '+': 
      return resultado = numero1 + numero2
      
    case '-': 
      return  resultado = numero1 - numero2
      
    case '/': 
      return  resultado = numero1 / numero2
      
    case '*': 
      return  resultado = numero1 * numero2
      
    case 'e': 
      resultado = 1; // Começamos com 1 pois estamos multiplicando
            for (let i = 0; i < numero2; i++) { 
                resultado *= numero1;  
            }
      return resultado
    case undefined:
      return  console.log('Esta dando algo errado')
      
    default:
      return console.log('operacao invalida')
      
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}