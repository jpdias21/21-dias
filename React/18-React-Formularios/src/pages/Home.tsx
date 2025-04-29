import { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'

function Home() {
  const [produto, setProduto] = useState({nome : '', marca : '', valor: '', categoria: ''})
  const [adicionado, setAdicionado] = useState<boolean>(false)

  
  const handleSubmit = async (event : any) => {
    event.preventDefault()
    try {
      const response = await axios.post('https://apigenerator.dronahq.com/api/UT5bX06g/data', {... produto, nome : produto.nome , marca : produto.marca, valor: Number(produto.valor), categoria: produto.categoria })
      console.log('response', response.data)
      setProduto({ nome: '', marca: '', valor: '', categoria: '' })
      setAdicionado(true)
    } catch (error) {
      console.error('error', error)
      setAdicionado(false)
    }
  }

  return (
    <>
  
  <form  onSubmit={handleSubmit}>
    <label htmlFor="NomeProduto">Nome do Produto : </label>
    <input type="text" id='NomeProduto' value={produto.nome} placeholder='Digite o nome' required onChange={(event) => setProduto({...produto, nome: event.target.value}) }/>
    <br />
    <label htmlFor="marca_produto">Marca : </label>
    <input type="text" id='marca_produto' value={produto.marca} placeholder='Digite a marca' required onChange={(event) => setProduto({...produto, marca :event.target.value})} />
    <br />
    <label htmlFor="valor_produto">Valor do produto : </label>
    <input type="number" id='valor_produto' value={produto.valor} placeholder='Digite o valor' required onChange={(event) => setProduto({...produto, valor: event.target.value})}/>
    <br />
    <legend>Categoria do produto :</legend>
    
    <input type="radio" id='alimenticio' name='categoria_produto' value='alimenticio'
    onChange={(event) => setProduto({...produto, categoria: event.target.value})}/><label htmlFor="alimenticio">alimenticio </label>
    
    <input type="radio" id='limpeza' name='categoria_produto' value='limpeza' required onChange={(event) => setProduto({...produto, categoria: event.target.value})} /><label htmlFor="limpeza">Limpeza </label>

    <input type="radio" id='Higiene_Pessoal' name='categoria_produto' value='Higiene_Pessoal' onChange={(event) => setProduto({...produto, categoria: event.target.value})} /><label htmlFor="Higiene_Pessoal">Higiene Pessoal </label>
    
    <input type="radio" id='Hortifruti' name='categoria_produto' value='Hortifruti' onChange={(event) => setProduto({...produto, categoria: event.target.value})} /><label htmlFor="Hortifruti">Hortifruti </label>
    
    <input type="radio" id='bebidas' name='categoria_produto' value='bebidas' onChange={(event) => setProduto({...produto, categoria: event.target.value})} /><label htmlFor="bebidas">Bebidas</label>
    <br />
    <br />
    <button>Enviar Produto</button>
    <br />
  </form>
  <br />
  {adicionado ? <p>Produto adicionado com sucesso</p> : '' }
    </>
  )
}

export default Home
