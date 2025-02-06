let n1 = Number(prompt('Digite um numero'))
let operacao = prompt('Digite a oprecao que voce quer realizar : +,-,/,*')
let n2 = Number(prompt('Digite mais algum numero'))

switch (operacao) {
    case '+':
        console.log(n1 + n2)
        break;

    case '-':
        console.log(n1 - n2)
        break
    case '*':
        console.log(n1 * n2)
        break
    case '/':
        console.log(n1 / n2)
        break
    default:
        console.log('Aconteceu algo errado')
        break;
}