let nome = prompt('Qual e o seu nome')
let idade = Number(prompt('Qual e a sua idade'))
let cartaDeMotoriata = prompt('Voce possui carta de motorista')
let carro = prompt('Voce possui carro')

if(idade < 18 || cartaDeMotoriata === 'nao'){
    console.log(nome + ', voce não pode dirigir')
}else if(idade <= 18 && cartaDeMotoriata === 'sim' && carro ==='nao'){
    console.log(nome +', voce pode dorogor mais não possui carro')
}else if(idade >= 18 && carta === 'sim' && carro === 'sim'){
    console.log(nome + ', você será o motorista')
}