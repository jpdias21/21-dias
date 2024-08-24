let numeroFibonacci = []
let numeroUsuario = parseInt(prompt('Digite um numero positivo :'))

numeroFibonacci[0] = numeroUsuario - 1
numeroFibonacci[1] = numeroUsuario

for(let i = 2; i <= 10 ; i++){
    numeroFibonacci[i] = numeroFibonacci[i -2] + numeroFibonacci[i -1]
}
console.log(numeroFibonacci)
