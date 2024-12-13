let nomes = []
let senhas = []

function escolha(opcao) {
    opcao = prompt('Voce deseja \n1.Cadastrar \n2.Fazer Login \n3.Excluir conta \n4.Encerrar')
    return opcao
}

function Cadastro(nome, senha) {
    nome = prompt('Digite seu nome para o cadastro :')
    senha = parseInt(prompt('Digite seu senha para o cadastro :'))
    nomes.push(nome)
    senhas.push(senha)
    console.log('Cadasdro feito com sucesso')
}

function Login(usiarioLogin, senhaLogin){
    encontrado = true
    if(nomes.includes(usiarioLogin) && senhas.includes(senhaLogin)){
        console.log('Login feito com sucesso')
        encontrado = false
    }else{
        console.log('O nome ou senha esta errado')
    }

}

function Excluir(excluirUsuario, excluirSenha){
    continua = false
    for(let i = 0 ; i < nomes.length ; i++){
        
        if(excluirUsuario === nomes[i] && excluirSenha === senhas[i]){
            nomes.splice(i, 1)
            senhas.splice(i, 1)
            console.log('Usuario e senha excluida com sucesso.')
            continuar = true
            break
        }
    }if(!continuar){
        console.log('O nome de usuario ou senha esta errado')
    }
}

let condicao = true

while(condicao){
    opcao = escolha()

    switch(opcao){
            
        case '1' :
            Cadastro()
            break
        
        
        case '2' :
            let usuarioLogin = prompt('digite seu nome de usuario')
            let senhaLogin = parseInt(prompt('Digite seu senha de login'))
            Login(usuarioLogin, senhaLogin)
             break
        
        case '3' :
            let excluirUsuario = prompt('Digite seu nome de usuario')
            let excluirSenha = parseInt(prompt('Digite sua senha'))
            Excluir(excluirUsuario, excluirSenha)
                break

        case '4':
            console.log('Voce escolheu parar por aqui')
            condicao = false
                break
        
        default :
           console.log('erro')
            break

    

    }
}