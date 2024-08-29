let condicao = true
let nomes = []
let senhas = []

do{
let opcao = prompt('Voce deseja \n1.Cadastrar \n2.Login \n3.Excliur \n4.Encerrar')

switch(opcao){
    case '1'  :
        let usuarioCadastrarLogin = prompt('Digete seu nome :')
        let usuarioCadastrarSenha = parseInt(prompt('Digite sua senha :'))
        nomes.push(usuarioCadastrarLogin)
        senhas.push(usuarioCadastrarSenha)
        console.log('Voce cadastrou seu login e senha')
        break
    case '2' :
    let usuariLogin = prompt('Digite seu nome  de login :')
    let usuariologinSenha = parseInt(prompt('Digite sua senha  de login:'))
    let loginEncontrado = false
    
    for(let i = 0 ; i < nomes.length ; i++){
        if(usuariLogin === nomes[i] && usuariologinSenha  === senhas[i]){
            console.log('Sucesso, voce conseguiu logar.')
            loginEncontrado = true
            break
        
        }
        
    }  if (!loginEncontrado ){
            console.log('Voce digitou o nome ou senha errado')
        
        }break 
        

    case '3'  :
            
    let usuarioExcluirlogin = prompt('Digite seu nome para escluir :')
    let usuarioExcluirSenha = parseInt(prompt('Digite sua senha para excluir : '))
    let usuarioEncontrado = false  
    for(let i = 0 ; i < nomes.length ; i++){
        if(usuarioExcluirlogin === nomes[i] && usuarioExcluirSenha  === senhas[i]){
            nomes.splice(i,1)
            senhas.splice(i,1)
            console.log('Parabens, excluimos o nome: ' + usuarioExcluirlogin + ' e a senha : ' + usuarioExcluirSenha)
            usuarioEncontrado = true
            break
        }
    } if(!usuarioEncontrado){
            console.log('voce digitou algou de errado no nome ou senha : ')
        }break  
    case '4' :
        console.log('Voce escolheu encerrar por aqui, obrigado')
        condicao = false
        break
    case undefined :
        console.log('Deu algo errado')
        break
}
}while(condicao)

console.log(nomes)
console.log(senhas)