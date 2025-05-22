import React, { useState } from 'react'
import axios from 'axios'

type Livro = {
    pessoa: {
      nome: string;
      cpf: string;
      email: string;
      telefone: string;
    };
    livro: {
      titulo: string;
      autor: string;
      editora: string;
      anoPublicacao: string;
    };
    emprestimo: {
      dataHora: string;
    };
  }
  
export default function UseFiltrarTodos() {
    
    const [dados, useDados] = useState<Livro[]>([])
    const todosOsLivros = async () => {
        try {
            const response = await axios.get("https://apigenerator.dronahq.com/api/9K6nFLh5/data")
            useDados(response.data)
            console.log(response.data)
        } catch (error) {
            console.error("Erro", error)
        }
    }

    return (
    <>
    <button onClick={todosOsLivros}>Todos os livros</button>
    {dados.filter(item => item.livro.titulo.trim() !== "").map((item, index) => (
        <ul key={index}>
            <p>Titulo do livro: {item.livro.titulo} </p>
            <p>Autor :{item.livro.autor} </p>
            <p>Editora : {item.livro.editora} </p>
            <p>ano de publicacao :  {item.livro.anoPublicacao} </p>
            <br />
            <p>{item.emprestimo.dataHora} </p>
        </ul>
    ))}
    </>
  )
}
