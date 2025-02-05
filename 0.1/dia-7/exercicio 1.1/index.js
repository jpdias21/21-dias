let condicao = true
valor = 1000 

do{
    let nome = prompt('digite seu nome')
    let cpf = parseInt(prompt('Digite seu CPF: '))
    let opcao = prompt('Escolha a opção que voce ira vfazer \n1. Saque \n2. Deposito')

    if(opcao === '1'){
        let valorDeSaque = Number(prompt('Digite o valor que voce ira sacar :'))
        if(valorDeSaque <= valor){
            console.log('Voce sacou ' + valorDeSaque + ' Reais da sua conta e sobrou ' + (valor - valorDeSaque) + ' Reais na sua conta')
        }else if( valorDeSaque > valor){
            console.log('Voce esta tentando sacar um valor maior que voce tem na sua conta')
        }
    }else if(opcao === '2'){
        let valorDeposito = Number(prompt('Digite o valor que voce ira depositar :'))
        console.log('Voce depositou ' + valorDeposito +' Reais na sua conta e o total ficou ' + (valor + valorDeposito) + ' Reais')
    }
    let continuar = prompt('Voce deseja continuar \n1.Não \n2.Sim')
    if(continuar === '1'){
        condicao = false
        console.log('Voce escolheu parar por aqui')
    }

}while(condicao )