let condicao = true
let nomes = []
let senhas = []

do{let cadastro = prompt('Voce deseja \n1.Cadastrar \n2.Login \n3.Excluir \n4.Encerrar')
   
switch(cadastro){
    case '1' :
        let cadastroNome = prompt('Cadastre seu nome seu nome :')
        let cadastroSenha = parseInt(prompt('Cadastre sua senha :'))
        nomes.push(cadastroNome)
        senhas.push(cadastroSenha)
        console.log('Cadastro feito com sucesso.')
    break

    case '2' :
        let loginNomes = prompt('Digite seu nome de cadastro :')
        let loginSenhas = parseInt(prompt('Digite sua senha de cadastro'))
        let loginFeito = false
            for(let i = 0 ; i <= nomes.length ; i++){
                if(loginNomes === nomes[i] && loginSenhas === senhas[i]){
                    console.log('Login feito com sucesso.')
                    loginFeito = true
                    break    
                }
            } 
            if(!loginFeito){
                console.log('Voce digitou seu nome ou senha errado')
            } break
    case '3' : 
        let excluirLogin = prompt('Digite seu nome de login :')
        let excluirSenha = parseInt(prompt('Digite sua senha para excluir:'))
        let excluiu = false
        for(let i = 0 ; i < nomes.length ; i++){
            if(excluirLogin === nomes[i] && excluirSenha === senhas[i]){
                console.log('Retiramos seu nome : ' + excluirLogin + ' e sua senha :' + excluirSenha)
                nomes.splice(i, 1)
                senhas.splice(i, 1)
                excluiu = true
                break
            }
        }if(!excluiu){
            console.log('Voce digitou o nome ou senha errado.')
        }break
    case '4': 
    console.log('voce escolheu encerrar por aqui')
        condicao = false
        break
    
    case undefined :
        if(undefined){
            console.log('Aconteceu algum erro')
        }
        break
     } ////Encerrar o switch

}while(condicao)
console.log(nomes)
console.log(senhas)