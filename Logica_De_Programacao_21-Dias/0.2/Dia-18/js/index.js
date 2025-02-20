// Classe Livro
class Livro {
    Titulo;
    Autor;
    Editora;
    AnodePublicacao;
    Disponibilidade = true;

    constructor(titulo, autor, editora, anodePublicacao) {
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnodePublicacao = anodePublicacao;
    }
}

// Criação de objetos da classe Livro
let livros = [];
livros.push(new Livro("livro1", "marcos", "editora A", 2001));
livros.push(new Livro("livro2", "marcos", "editora F", 1997));
livros.push(new Livro("livros", "Carlos", "editora F", 2010));
livros.push(new Livro("livros", "João", "editora A", 2005));
livros.push(new Livro("livros", "Fábio", "editora C", 2020));

// Classe Biblioteca
class Biblioteca {
    Nome;
    Endereco;
    Telefone;
    AcervoDeLivros = [];

    constructor(nome, telefone, endereco, acervoDeLivros = []) {
        this.Nome = nome;
        this.Telefone = telefone;
        this.Endereco = endereco;
        this.AcervoDeLivros = acervoDeLivros;
    }

    BuscarLivroPeloTitulo(titulo) {
        this.AcervoDeLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                console.log(livro);
            }
        });
    }

    EmprestarLivro(titulo) {
        let emprestado = false;
        this.AcervoDeLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                if (livro.Disponibilidade == true) {
                    livro.Disponibilidade = false;
                    emprestado = true;
                }
            }
        });
        if (emprestado) {
            return true;
        } else {
            return false;
        }
    }

    DevolverLivro(titulo) {
        this.AcervoDeLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                livro.Disponibilidade = true;
                console.log("Livro devolvido");
            }
        });
    }
}

// Criação de um objeto da classe Biblioteca
let biblioteca = new Biblioteca("Biblioteca Dobe", "123456", "Rua 2", livros);

// Testando os métodos
biblioteca.BuscarLivroPeloTitulo("livro2");
biblioteca.EmprestarLivro("livro1");
biblioteca.DevolverLivro("livro1");