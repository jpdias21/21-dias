
let condicao = true

do{
let nome = prompt('Insira seu nome :')
let idade = Number(prompt('Insira sua idade:'))
let peso = parseInt(prompt('Insira seu peso :'))
let altura = Number(prompt('Insira sua altura :'))
let profissao = prompt('Insira qual e a sua profissão :')
let exibe = 'Olá ' + nome + ', você tem ' + idade + 'Anos, é ' + profissao + ', tem ' + altura + 'M de altura e pesa ' + idade +' Kg'
console.log(exibe)

let idadeEmMesses = idade * 12
let idadeEmsamanas = idade * 52
let idadeEmDias = idade * 365 

console.log('Sua idade em messes :' + idadeEmMesses)
console.log('Sua idade em semanas :' + idadeEmsamanas)
console.log('Sau idade em dias :' + idadeEmDias)

if(idade >= 18){
    console.log('Esta liberado para tomar umas geladas')}else if(idade <= 18 ){
        console.log('Sem gelada para voce')
    }

let imc = (peso /(altura * altura))
console.log(imc)
if(imc < 18.5){
    console.log('Voce esta em um nivel de magreza')
}else if(imc > 18.5 && imc < 24.9 ){
    console.log('voce se encontra no nivel normal')
}else if(imc > 24.9 && imc < 30){
    console.log('Voce esta com sobrepeso')
}else if(imc > 30){
    console.log('Voce esta em estado de obesidade')
}
let idadeDeNascimento = (2024 - idade)
console.log('O ' + nome + ' Nasceu em ' + idadeDeNascimento)

for(let i = (2024 - idade) ; i <= 2024; i++ ){

    console.log(i + '- ' + (i - idadeDeNascimento) + ' Anos de idade')}
    
    let continuar = prompt('Voce quer iserir novos dados ou para por aqui \n1.Continuar \n2.Parar')
        if(continuar === '2'){
            condicao = false
        }
    

}while(condicao)

