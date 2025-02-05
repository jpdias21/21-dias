let condicao = true 
do {
let nome = prompt('Digite seu nome :')
let idade = Number(prompt('Digite sua idade :'))
let altura = parseFloat(prompt('Digite sua altura :'))
let profissao = prompt('Digite sua profissão :')
let peso = parseInt(prompt('Digite seu peso :'))

console.log('Olá ' + nome + ', voce tem ' + idade + ' anos, é ' + profissao + ', tem ' + altura + ' de altura e pesa ' + peso +'Kg' )

if(idade >= 18){
    console.log('Esta leberado para tomar umas geladas')
}else if(idade < 18){
    console.log('Sem gelada para voce')
}

let meses = idade * 12
console.log('Voce esta vivendo  a ' + meses + ' meses')
let semanas = idade * 52
console.log('voce esta vivendo a ' + semanas + ' Semanas')
let dias = idade * 365
console.log('Voce esta vivendo a ' + dias + ' dias')

let imc = peso/(altura*altura)

if(imc <= 18.5){
    console.log('Voce esta em um nive de magreza')
}else if(imc > 18.5 && imc <= 24.9){
    console.log('Voce esta em um nivel normal')
}else if(imc > 24.9 && imc <= 30){
    console.log('voce se encontra em um nivel de sobrepeso')
}else if(imc > 30){
    console.log('voce esta em um nivel de obesidade')
}

let nascimento = 2024 - idade
console.log('Voce nasceu em ' + nascimento)

for(let i = 0 ; i <= idade ; i++){
    
    console.log(nascimento + i + ' - ' + i + ' anos de idade')
}

let continuar = prompt('Voce deseja inserir mais dados \n1. Sim \n2.Não ')
if(continuar === '2'){
    console.log('Voce escolheu parar por aqui')
    condicao = false
}

}while(condicao)