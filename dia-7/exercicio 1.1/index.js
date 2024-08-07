let valor = 1000 

do{ let nome = prompt('Digite seu nome :')
    let cpf = Number(prompt('Digite seu CPF :'))
    let opcao = prompt('Escolha a opcão entre \n 1. Saque \n 2. Deposito')

        if(opcao === '1'){
            let saque = Number(prompt('Escolha qual o valor voce irá sacar'))
                if(saque <= valor){
                    console.log('Opa ' + nome + 'voce sacou ' + (saque) + ' Reais e sobrou ' + (valor - saque + ' Reais da sua conta'))
                }else if(saque >= valor){
                    console.log(nome + ' voce esta tentando sacar um valor maior do que esta na sua conta')
                }
        }else if(opcao === '2'){
                    let deposito = Number(prompt('Digite o valor que voce quer depositar'))
                    console.log('Voce acabou de adicionar ' + deposito + 'Reais na sua conta com e total de :' + (valor + deposito) + ' Reais na sua conta bancaria')
                }
                
                let continuar = prompt('Voce quer continuar \n 1. Quero continuar \n 2. Quero parar')

    } while(continuar === '1')