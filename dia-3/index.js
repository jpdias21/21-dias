let nome = prompt("insira seu nome")
let idade = Number(prompt("insira sua idade"))
let altura = Number(prompt("insira sua altura"))
let peso = Number(prompt("insira seu peso"))

let anoDeNascimento = 2024 - idade

let imc = peso / (altura * altura)

console.log(`Ola ${nome}, você tem ${idade} anos, nasceu em ${anoDeNascimento}, tem ${altura} de altura, pesa ${peso} quilos seu IMC é ${imc} kg/m2}`)