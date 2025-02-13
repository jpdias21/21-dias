arrayLivro = []
arrayBiblioteca = []

class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true
    constructor(Titulo, Autor, Editora,  AnoDePublicacao, Disponibilidade = true){
        this.Titulo = Titulo
        this.Autor = Autor
        this.Editora = Editora
        this.AnoDePublicacao = AnoDePublicacao
        this.Disponibilidade = Disponibilidade
       
    }
}

let cadastraLivro1 = new Livro ('Titulo do Livro 01', 'Autor do livro 01', 'Nome da editora 01', parseInt(11938301))
let cadastraLivro2 = new Livro ('Titulo do Livro 02 ', 'Autor do livro 02', 'Nome da editora 02', parseInt(11938302))
let cadastraLivro3 = new Livro ('Titulo do Livro 03', 'Autor do livro 03', 'Nome da editora 03', parseInt(11938303), false )

arrayLivro.push(cadastraLivro1)
arrayLivro.push(cadastraLivro2)
arrayLivro.push(cadastraLivro3)

class Biblioteca {
    Nome 
    Endereco
    Telefone
    AcervoDeLivros = []
    constructor(Nome, Endereco, Telefone, AcervoDeLivros ){
        this.Nome = Nome
        this.Endereco = Endereco
        this.Telefone = Telefone
        this.AcervoDeLivros = AcervoDeLivros 
        
    }

        BuscarOlivroPeloTitulo(titulo){
            let achouTitulo = arrayLivro.find(t=> t.Titulo === titulo)
            if(achouTitulo){
                console.log(`Nome do Livro : ${achouTitulo.Titulo}`)
                console.log(`Autor do titulo : ${achouTitulo.Autor}`)
                console.log(`Editora : ${achouTitulo.Editora}`)
                console.log(`Ano de publição : ${achouTitulo.AnoDePublicacao}`)
            }else{
                console.log('Não tem nenhum livro com este nome')
            }
        }
    
        PegarLivroEmprestado(titulo){
            let achouTitulo = arrayLivro.find(t => t.Titulo === titulo)
            if(achouTitulo){
                if(achouTitulo.Disponibilidade === true){
                    console.log('Este livro esta disponivel')
                }else{
                    console.log('Este livro esta indisponivel')
                }
            }else{
                console.log('Não tem livro com esta titulo, ou voce errou na digitação')
            }
        } 

        DevolverLivro(titulo){
            let achouTitulo = arrayLivro.find(t => t.Titulo === titulo)
            if(achouTitulo){
                if(achouTitulo.Disponibilidade === false){
                    console.log(`Voce esta devolvendo o livro ${achouTitulo.Titulo}`)
                    achouTitulo.Disponibilidade = true
                }else{
                    console.log(`Este livro esta disponivel`)
                }
            }else{
                console.log('Não tem nenhum livro com este titulo ou voce digitou errado.')
            }
        }
}///TERMINA

let acervo1 = 'livro 1'
let acervo2 = 'livro 2'
let acervo3 = 'livro 3'

let cadastraBiblioteca1 = new Biblioteca ('Nome da biblioteca', 'Endereço',  parseInt(11938301) , acervo1)
let cadastraBiblioteca2 = new Biblioteca ('Titulo do Livro 02 ', 'Autor do livro 02', parseInt(11938302), acervo2 )
let cadastraBiblioteca3 = new Biblioteca ('Titulo do Livro 03', 'Autor do livro 03', parseInt(11938303), acervo3)

arrayBiblioteca.push(cadastraBiblioteca1)
arrayBiblioteca.push(cadastraBiblioteca2)
arrayBiblioteca.push(cadastraBiblioteca3)

///
cadastraBiblioteca1.BuscarOlivroPeloTitulo('Titulo do Livro 01')
cadastraBiblioteca1.PegarLivroEmprestado('Titulo do Livro 01')
cadastraBiblioteca3.DevolverLivro('Titulo do Livro 03')
/////
console.log(arrayLivro)
console.log(arrayBiblioteca)