let nome = prompt('Digite seu nome :')
let idade = parseInt(prompt('digite sua idade'))
let peso = parseInt(prompt('Digite seu peso:'))
let altura = parseFloat(prompt('digite sua altura'))
let profissao = prompt('Insira qual a sua profissao :')

console.log(`Olá ${nome}, voce tem ${idade} anos, é ${profissao}, tem ${altura.toFixed(2)} de altura e pesa ${peso.toFixed(2)} quilos.`)

if(idade > 18){
    console.log('Esta liberado para domar uma gelada')
}else if(idade <18){
    console.log('Sem gelada hoje')
}

let idadeEmMeses = idade * 12
let idadeEmSemanas = idade * 52 
let idadeEmDias = idade * 365
let horasVivo = 24 * 365 * idade
console.log(`Quantos meses voce esta vivo ${idadeEmMeses}`)
console.log(`Quantos semanas voce esta vivo ${idadeEmSemanas}`)
console.log(`Quantos dias voce esta vivo ${idadeEmDias}`)
console.log(`Quantas horas voce esta vivo ${horasVivo}`)

///calculo imc

let imc = peso / (altura * altura)

console.log(imc)

if(imc < 18.5){
    console.log('Voce esta em um nivel de percentual de gordura de magreza')
}else if(imc > 18.5 && imc < 24.9){
    console.log('Voce esta em um nivel de percentual de gordura normal')
}else if(imc > 24.9 && imc <30){
    console.log('Voce esta em um procentual de gortura considerada como sobrepeso')
}else if(imc > 30){
    console.log('Voce esta em um nivel de obesidade')
}

let ano = 2025
console.log(`O ano que voce nasceu foi em ${ano - idade}`)