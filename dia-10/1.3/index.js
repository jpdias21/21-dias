let recebe = []

let quantidade = Number(prompt('Quantas numeros voce deseja inserir :')) 

for(let i = 0 ; i <= quantidade ; i ++){
    let numeros = Number(prompt('Digite os numeros :'))
    recebe.push(numeros)
}
console.log('Os numeros que voce digitou :' + recebe)
console.log('Os numeros de forma reversa :' + recebe.reverse())