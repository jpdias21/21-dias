let arrayListas = []

let opcao = parseInt(prompt('Quantos numeros voce quer inserir :'))

for( let i = 0 ; i <= opcao; i++){
    let num1 = parseInt(prompt('Digite o(s) numeros :'))
    arrayListas.push(num1)
}
console.log(arrayListas)

let reverse = arrayListas.reverse()

console.log(reverse)
