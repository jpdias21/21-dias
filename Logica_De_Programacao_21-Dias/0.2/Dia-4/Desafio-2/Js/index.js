let nome = prompt('Digite seu nome:')
let idade = parseInt(prompt('Digite sua idade:'))
let carta = prompt('Voce possui carte de motarista : Digite 1.Sim 2.Nao')
let carro = prompt('Voce possui carro: Digita 1.Sim 2.Nao')
if(idade < 18 || carta === '2'){
    console.log(`${nome}, voce nao pode dirigir
    `)
}else if(idade >= 18 && carta === '1' && carro === '2'){
    console.log(`${nome}, voce pode dirigir mais nao tem carro`)
}else if(idade >= 18 && carta === '1' && carro === '1'){
    console.log(`${nome}, voce sera o motarista`)
}