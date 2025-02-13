let nome = prompt('Digite seu nome')
let idade = parseInt(prompt('Digite sua idade'))
let pegandoAltura = Number(prompt('Digite sua altura, coloque o "." '))
let pegandoPeso = parseFloat(prompt('Digite seu peso'))

let altura = pegandoAltura.toFixed(2)
let peso = pegandoPeso.toFixed(2)
let anoDeNascimento = 2025 - idade


let imc = peso / (altura*altura)
console.log(`Olá ${nome}, voce tem ${idade}, nasceu em ${anoDeNascimento}, tem ${altura}, pesa ${peso} quilos e seu IMC e de ${imc} Kg/m2`)
