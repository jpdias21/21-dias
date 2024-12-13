let num1 = Number(prompt('Escolha algum numero'))
let num2 = Number(prompt('Escolha mais algume numero'))
let operacao = prompt('Escolha alguma operação +,-,*,/')

switch(operacao){
    case '+' :
        console.log(num1 +num2)
        break
    case '-' :
        console.log(num1 - num2)
        break
    case '*' :
        console.log(num1 * num2)
        break
    case '/' :
        console.log(num1 / num2 )
        break
    default :
        console.log('Deu algum erro')
        break
}