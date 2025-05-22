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
  
export default function UseFiltroCpf() {
    
    const [dados, useDados] = useState<Livro[]>([])
    const [usuarioCpf, setUsuarioCpf] = useState<string>("")
    const todosOsLivros = async (event : any) => {
      event.preventDefault()
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
    <form onSubmit={todosOsLivros}>
    <label>Bucar pelo Cpf : </label>
    <input type="number" placeholder='Digite seu cpf' onChange={(event) => setUsuarioCpf(event.target.value)} />
    <button type='submit'>Buscar </button>
    </form>
    {dados
        .filter(item => item.pessoa.cpf.trim() === usuarioCpf.trim())
        .map((item, index) => (
        <ul key={index}>
            <p>Titulo do livro: {item.pessoa.nome} </p>
            <p>Autor :{item.pessoa.email} </p>
            <p>Editora : {item.livro.editora} </p>
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
