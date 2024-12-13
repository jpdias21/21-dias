let recebe = []

for(let i = 0 ; i <= 5 ; i++){
   let numeros = Number(prompt('Digite um numero'))
   recebe.push(numeros)
}
console.log('Numeros de entrada :' + recebe )
console.log('Numeros de saida : ' + recebe.reverse())