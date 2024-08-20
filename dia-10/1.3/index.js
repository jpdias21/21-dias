let numero = []
let opcao = Number(prompt('digite quantos numeros vc quer inserir :'))

for(let num1 = 0 ; num1 <= opcao ; num1 ++){
    let numeros = Number(prompt('Digite um numero'))
    numero.push(numeros)
}
console.log('Os numeros que voce digitou sao ' + numero )

numero.reverse()
console.log('os numeros que voce digitou de forma contraria ' + numero)
