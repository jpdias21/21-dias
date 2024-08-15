let condicao = true

do{
let nome = prompt('Insira seu nome :')
let idade = Number(prompt('insira sua idade :'))
let peso = parseInt(prompt('Insira seu peso :'))
let altura = Number(prompt('Insira sua altura :'))
let profissao = prompt('insira a sua profissão :')
let texto = ('Olá '+ nome + ', você tem ' + idade + ' anos, é ' + profissao + ', tem ' + altura + 'M de altura e pesa ' + peso + 'KG .')
console.log(texto)

if(idade >= 18){
    console.log('Esta leberado para tomar umas geladas')
}else if(idade < 18){
    console.log('Sem gelada para você.')
}

let idadeEmDias = idade * 365
let idadeEmSemanas = idade * 54
let idadeEmMes = idade * 12

console.log('você viveu ' + idadeEmDias + ' dias')
console.log('Voce viveu ' + idadeEmSemanas + ' semanas')
console.log('Voce viveu ' + idadeEmMes + ' meses')

let imc = peso / (altura * altura)
console.log('Seu imc e ' + imc)
if(imc <= 18.5){
    console.log('Voce esta em um nivel e magreza')
}else if(imc > 18.5 && imc <= 24.9){
    console.log('Voce esta em um nivel normal')
}else if(imc > 24.9 && imc <= 30){
    console.log('Voce esta em um nivel de sobrepeso')
}else if(imc > 30){
    console.log('Voce esta em um nivel de obesidade')
}

let anoDdeNascimento = 2024 - idade
console.log('Voce nasceu em ' + anoDdeNascimento)

for(let num1 = anoDdeNascimento ; num1 <= 2024 ; num1++ ){
    let idadeAtual = num1 - anoDdeNascimento
    console.log(num1 + ' - ' + idadeAtual + '   Anos')
}

    let continuar = prompt('voce deseja inserir novos dados ou finalizar. \n1.Continuar \n2.Finalizar por aqui')
    if(continuar === '2'){
        console.log('Você escolheu para por aqui')
        condicao = false
    }
}while(condicao)