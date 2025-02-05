let condicao = true

let nome = prompt('Digite seu nome :');
console.log(nome)
let idade = Number(prompt('Digite sua idade :'))
console.log(idade)
let salario = Number(prompt('Digite seu salario :'))
console.log(salario)
while(condicao){
    let continuar = prompt('As informações que voce informou estão corrretas: \n1.Sim (Continuar) \n2.Não(Voltar)')
if(continuar === '1'){
    console.log('Então vamos continuar')
    condicao= false
}
}
let percentual = 1.5

for(let i = 1 ; i  <= 10 ; i++){
    let aumento = (salario * percentual) / 100
    salario = salario + aumento
    console.log(2024 + i + ' - R$' + salario.toFixed(2))
}



