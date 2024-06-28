let conta = Number(1000)
let condicao = true


do {
    let nome = prompt('Digite seu nome')
    let cpf = String(prompt('Digite seu CPF'))
    
    let valor = Number(prompt('Qual o valor voce quer sacar ou depositar'))
    let opcao = prompt("Escolha a opcão entre \n1. saque  \n2.deposito")

    if(opcao === '1' ){
        
        if(valor > conta){
            console.log("Saldo insuficiente para sacar")
        } 
        else if(valor <= conta){
                console.log('Seu nome e: ' + nome)
                console.log("Seu CPF e: " + cpf)
                console.log("voce sacou " + valor + " Reais " +" e " + "sobrou na sua conta, " + (conta - valor) +" Reais")
        }}
    else if(opcao === '2'){
         prompt("\n1 .voce deseja continuar digite 1   \n2. se deseja parar Gigite 2 ")
        
        if( '1'){
        
                console.log('Seu nome e: ' + nome)
                console.log("Seu CPF e: " + cpf)
                console.log("Antes voce tinha o saldo de " + conta + " Reais " + " Agora o saldo e de " + (conta + valor) + " Reais ")
        }
        else if('2'){
            console.log("Voce parou aqui")
        }
    }
    
    }while(condicao)
