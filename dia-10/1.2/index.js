let num1 = []

for(let i = 0 ; i < 10 ; i++){
   let obtendoNumero = parseInt(prompt('Digite um numero'))
   num1.push(obtendoNumero)
}
console.log('o numero de forma que voce digitou ' + num1)

num1.reverse()
console.log('Os numeros de forma contraria ' + num1)

