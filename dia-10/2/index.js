let pedindoNumero = Number(prompt('Digite um numero inteiro :'))

let numero = []

numero[0] = pedindoNumero - 1
numero[1] = pedindoNumero

for(let i = 2 ; i < 10 ; i++){
    numero[i] = numero[i -1] + numero[i - 2]
}
console.log(numero)