let conta = 1000
let escolha = true
let registro = {
    saque :[] , 
    deposito :[]
} 
do{
    let nome = prompt('Digite seu nome')
    let cpf = parseInt(prompt('Digite seu CPF :'))
    
    let opcao = prompt('Voce deseja \n1.Saque \n2.Deposito')
    if(opcao === '1'){
       
        let valorDeSaque = parseInt(prompt('Digite o valor que voce quer sacar:'))
        if(valorDeSaque > conta){
            console.log('Voce esta tentando sacar um valor maior do que esta na sua conta')
        }else if(valorDeSaque <0){
            console.log(`Voce esta tentando sacar um valor negativo`)
        }else{
            registro.deposito.push(valorDeSaque)
        console.log(`Voce realizou o saque de ${valorDeSaque.toFixed(2)} Reais e sua conta ficou com um total de ${conta - valorDeSaque} Reais`)}
    
    }else if(opcao === '2'){
        let valorDeposito = parseInt(prompt('Digite o valor que voce ira depositar :'))
        let desejaContinuar = prompt('Voce deseja continuar \n1.Sim \n2.Nao')
        if(desejaContinuar === '1'){
            registro.saque.push(valorDeposito)
        console.log(`Sua conta esta com o valor tatal de ${conta + valorDeposito}`)}else if(desejaContinuar === '2'){
            console.log('Voce escolheu parar por aqui')
            escolha = false
        }else if(valorDeposito <0){
            console.log('Voce esta tentando depositar um valor negativo')
        }
    }
   
}while(escolha === false)


let maiorSaque = Math.max(... registro.saque)
console.log(`O maior registro de saque e ${maiorSaque}`)

let maiorDeposito = Math.max(...registro.deposito)
console.log(`O mair registro de deposito e ${maiorDeposito}`)
