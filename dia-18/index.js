
arrayLivros = []
arrayBiblioteca = []

class Livro{
    Titulo
    Autor
    Editora
    AnoDePublicacao
    disponibilidadeDoLivro = true
    constructor(
        Titulo , Autor, Editora, AnoDePublicacao){
        this.Titulo = Titulo
        this.Autor = Autor
        this.Editora = Editora
        this.AnoDePublicacao = AnoDePublicacao
    }
}

/// ------------------------
arrayLivros.push(new Livro ('O rei', 'Joao', 'Editora = 1', 2002))
arrayLivros.push(new Livro ('Joao', 'Maria', 'Editora = 2', 1990))
arrayLivros.push(new Livro ('o ', 'Pedro', 'Editora = 3', 1998))
arrayLivros.push(new Livro ('48 Leis do poder', 'Dias', 'Editora = 4', 2010))
/// ------------------------------

class Biblioteca{
    Nome 
    Endereco
    Telefone
    AcervoDeLivros = []
    constructor(Nome,Endereco,Telefone){
        this.Nome = Nome
        this.Endereco = Endereco
        this.Telefone = Telefone
        this.AcervoDeLivros = acervo 
    }
}



let acervo = ['livro 1' , 'livro 2', 'Livro 3']

arrayBiblioteca.push(new Biblioteca('Joao 1' , 'Rua Maria 1' , parseInt('11924323452334'),))
arrayBiblioteca.push(new Biblioteca('Joao 2' , 'Rua Maria 2' , parseInt('11234523454534'),))
arrayBiblioteca.push(new Biblioteca('Joao 3' , 'Rua Maria 3' , parseInt('1192234334533'), ))

function BuscarLivro(){

    let buscarPeloNomeDoLivro = prompt('Digite o nome do Livro ')
    let achouLivro = arrayLivros.find(l => l.Titulo === buscarPeloNomeDoLivro)
    if(achouLivro){
        console.log(`Titulo : ${achouLivro.Titulo}`)
        console.log(`Autor : ${achouLivro.Autor}`)
        console.log(`Editora : ${achouLivro.Editora}`)
        console.log(`Ano de publicação : ${achouLivro.AnoDePublicacao}`)
        console.log(`Disponivel : ${achouLivro.disponibilidadeDoLivro}`)
    }else{
        console.log('Não tem nenhum livro com este nome ou voce digitou errado')
    }
}

function PegarLivroEmprestado(){
    let buscarLivro = prompt('Digite o nome do Livro ')
    let achouLivro = arrayLivros.find(l => l.Titulo === buscarLivro)
    if(achouLivro){

        if(achouLivro.disponibilidadeDoLivro === true){
            let livroDisponivel = prompt(`O livro ${achouLivro.Titulo} esta disponivel, Digite \n1.para pegar  \n2.para sair`)
            if(livroDisponivel === '1' ){
                achouLivro.disponibilidadeDoLivro = false ;
                
                console.log(`Voce pegou o livro  ${achouLivro.Titulo}, e ele esta indisponivel.`)

            } else if(livroDisponivel === '2'){
                console.log('Voce escolheu sair')
                return
        }else{
            console.log('este livro não esta disponivel')
        }
        
    }else{
        console.log('Não tem livro com este nome ou voce colocou o nome errado')
    }
}
}

function DevolverLivro(){
    let nomeDoLivro = prompt('Digite o nome do livro :')
    achouLivro = arrayLivros.find(l => l.Titulo === nomeDoLivro)
    if(achouLivro){
        if(achouLivro.disponibilidadeDoLivro === true){
            console.log('Este livro ja esta dispovivel')
            return
        }else if(achouLivro.disponibilidadeDoLivro === false){
            let devolverLivro = prompt('Digite \n1.Para devolver \n2.Voltar e não devolver')
            if(devolverLivro === '1'){
            achouLivro.disponibilidadeDoLivro = true
            console.log(`Agora o livro ${achouLivro.Titulo} esta disponivel`)
        }else if(devolverLivro === '2'){
            console.log('Voce não devolveu o livro e esolheu voltar')
            return
        }
        }else{
            console.log('no acervo da biblioteca não tem nenhum livro com este nome para adicionar')
            return
        }
    }
}


let continuar = true

do{
let questao = prompt('\n1.Buscar o livro \n2.Pegar livro emprestado \n3.Devolver Livro \n4.Encerrar')
switch(questao){
    case '1':
        BuscarLivro()
    break

    case '2':
        PegarLivroEmprestado()
    break
    case '3' :
        DevolverLivro()
    break
    case '4':
        continuar = false
        console.log(arrayBiblioteca)
        console.log(arrayLivros)
        break

    default :
    console.log('erro')

    break

} 
}while(continuar)