let nomes = []
let senhas = []

let continuar = true

while(continuar){

let opcao = prompt(`Digite de voce deseja: \n1.Cadastrar \n2.Fazer login \n3.Excluir \n4.Encerrar`)

    switch (opcao) {
        case '1':
            let cadastrarNome = prompt('Digite seu nome :')
            let cadastrarSenha = prompt('Digite sua senha')

            nomes.push(cadastrarNome)
            senhas.push(cadastrarSenha)
            
            
            break;

        case '2':
            let nomeLogin = prompt('Digite se nome de login')
            let senhaLogin = prompt('Digite sua senha de login')    

            for(let i = 0 ; i < nomes.length; i++){
                if(nomeLogin === nomes[i] && senhaLogin === senhas[i]){
                    console.log('Login feito com sucesso')
                   
                }else if(nomeLogin === nomes[i] && senhaLogin !== senhas[i]){
                    console.log('A sua senha esta errada')
                    
                }else if(nomeLogin !== nomes[i] ){
                    console.log('Nao tem nehum usuario com este nome')
                    
                }
            }
            break
        case '3':
               let nomeExcluir = prompt(`Digite seu login`)
                

               for(let i = 0 ; i < nomes.length; i++){
                if(nomeExcluir === nomes[i]){
                    let senhaExcluir = prompt('Digite a senha')
                    if(senhaExcluir === senhas[i]){
                        nomes.splice(i, 1)
                        senhas.splice(i, 1)
                        break
                        
                    }else if(senhaExcluir !== senhas[i]){
                        console.log('A sua senha esta errada')
                    }
                }
               }
                break
        case '4':
            console.log('Voce escolheu parar por aqui')
            continuar= false
            break

        default:
            break;
    }    

}

console.log(nomes)
console.log(senhas)