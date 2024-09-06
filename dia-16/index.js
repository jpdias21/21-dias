let condicao = true
let arrayCadastroNome = []
let arrayCadastroSenha = []


while(condicao){

    let escolha = prompt('O que voce deseja fzer : \n1.Cadastrar \n2.Login \n3.Excluir \n4.Encerrar')
    switch(escolha){
        case '1' :
            let nome = prompt('Digite seu nome para cadastrar :')
            let senha = parseInt(prompt('digite uma senha para cadastrar :'))
            arrayCadastroNome.push(nome)
            arrayCadastroSenha.push(senha)
        break

        case '2':
            let loginNome = prompt('digite seu nome para login :')
            let loginSenha = parseInt(prompt('Digite sua senha para login:'))
            
            if(arrayCadastroNome.indexOf(loginNome) && arrayCadastroSenha.indexOf(loginSenha)){
                console.log('login feito com sucesso')
                continuarLogin = true

            }else if(!continuarLogin){
                console.log('voce digitou o longin ou senha errado')
            }
        break
        case '3' :
            let excluirLogin = prompt('Digite seu nome de login para excluir :')
            let excluirSenha = parseInt(prompt('Digite sua senha de login para excluir'))
            let excluirUsuario = true
            if(arrayCadastroNome.includes(excluirLogin) || arrayCadastroSenha.includes(excluirSenha)){
                arrayCadastroNome.splice(1, excluirLogin)
                arrayCadastroSenha.splice(1, excluirSenha)
                excluirUsuario = false
            }else if(!excluirUsuario){
                console.log('Voc e digitou seu login ou senha errado')
            }
        break
        case '4' :
            console.log('Voce escolheu parar por aqui')
            condicao = false
        break
        case undefined :
            console.log(undefined)
        break

    }
}