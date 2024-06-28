let num1 = Number(prompt('Digite um algum numero'))

let num2 = Number(prompt('Digite outro numero'))

let operacao = prompt('Digite a operação -,+,*,/,%')

switch(operacao){
    case '+':
        console.log(num1 + num2)
            break 
    case '-':
        console.log(num1 - num2)
            break
    case '*':
        console.log(num1 * num2)
            break  
    case '/':
        console.log(num1 / num2)
            break 
    case '%':
        console.log(num1 % num2)
            break 
    default:
        console.log('Deu algo errao, tente novamente')
        break
}
