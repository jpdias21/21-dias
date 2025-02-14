let continuar = true
let arrayNome = []
let arraySenha= []

function cadastro(){
    let nome = prompt('Digite seu nome')
    let senha = prompt('Digite sua senha')

    arrayNome.push(nome)
    arraySenha.push(senha)
}

function login(){
    let nomeLogin = false
    let ologin = prompt('Digite seu nome de login')
    let osenha = prompt('Digite seu senha')
    for(let i = 0 ; i < arrayNome.length; i++){
        if(ologin === arrayNome[i] && osenha === arraySenha[i]){
            console.log('Login feito com sucesso')
            nomeLogin = true
            break
            } 
    }
    if(nomeLogin === false){
        console.log('Seu usuario ou senha esta errado')
        
    }
    console.log(nomeLogin)
}

function excluir(){
    let excluiu = false
    let login = prompt('Digite seu nome de login')
    let senha = prompt('Digite sua senha')
    for(let i = 0 ; i <= arrayNome.length ; i++){
        if(login === arrayNome[i] && senha === arraySenha[i]){
            arrayNome.splice(i,1)
            arraySenha.splice(i,1)
            console.log('Usuario e senha excluida com sucesso')
            excluiu = true
            break
        }
    }
    if(excluiu === false){
        console.log('Sua usuario e senha esta errado')
    }
}
while(continuar){
    let questao = prompt('Voce deseja : \n1.Cadastrar \n2.Fazer login \n3.Excluir \n4.Encerrar')

    switch(questao){
        case '1':
            cadastro()
        break
        
        case '2':
            login()
        break
        
        case '3':
            excluir()
        break
        
        case '4':
        
        console.log('Voce escolheu parar por aqui')
        continuar = false
        break

        default:
            console.log('Aconteceu algo de errado')
        break
        
    }
}
console.log(arrayNome)
console.log(arraySenha)