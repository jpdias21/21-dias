///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Calculadora (numero01, numero02, operador){
  let num1 = parseInt(numero01)
  let num2 = parseInt(numero02)
  switch(operador){
    case '+' :
      return (num1 + num2)
      break
    case '-' :
      return (num1 - num2)
      break 
    case '*' :
      return (num1 * num2)
      break
    case '/' :
      return (num1 / num2 )
      break
    
  // So este que não entendi direito e tive que buscar 
      case 'e' :
      let resultado = 1
      for(let i = 0; i < num2; i++) {
        resultado *= num1}
        return resultado
 // e kkkkkkkkkkkkk
    default :
      return 'Deu algum erro'
      break

    }
    if( resultado === undefined || resultado > 1000000){
      return resultado = 'ERRO'
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