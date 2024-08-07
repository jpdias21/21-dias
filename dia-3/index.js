let nome = prompt("insira seu nome")
let idade = Number(prompt("insira sua idade"))
let altura = Number(prompt('insira sua altura'))
let peso = Number(prompt('Insira seu peso'))
let anoDeNascimento = Number(2024 - idade)
let imc = peso / (altura * altura)

console.log( 'Ola ' + nome + ', voce tem ' + idade + ' anos, nasceu em ' 
    + anoDeNascimento + ', tem ' + altura + ' de altura, pesa ' + peso + 'kg, seu IMC é ' + imc + 'Kg/m2' )