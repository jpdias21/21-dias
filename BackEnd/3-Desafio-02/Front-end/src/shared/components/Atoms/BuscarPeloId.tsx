import React, { useState } from 'react'
import { buscarPeloId } from '../../../services/userService'

interface Carro {
  marca_carro: string;
  modelo_carro: string;
  ano_carro: string;
  cor: string;
  estado_do_veiculo: string;
  numero_de_portas: string;
  quilometragem: string;
  valor_carro: string;
}

function BuscarPeloId() {
 const [id, setId] = useState<string>('')  
 const [carro, setCarro] = useState<Carro | null>(null)
 
 const resultado = async(event :any) => {
    event.preventDefault()
    try {
       const response =await buscarPeloId(id)
        setCarro(response)
    } catch (error) {
        console.error('Deu erro', error)
    }
 }
return (
    <>
    <h2>Busque o carro pelo id</h2>
    <form onSubmit={resultado}>
    <input type="text" value={id} required placeholder='Digite o id do carro' onChange={(event) => setId(event.target.value)}/>
    <br />
    <button type='submit'>Buscar</button>
    </form>
    <br />
    {carro && (
        <div>
            <h3>Dados do Carro:</h3>
          <p>Marca: {carro.marca_carro}</p>
          <p>Modelo: {carro.modelo_carro}</p>
          <p>Ano: {carro.ano_carro}</p>
          <p>Cor: {carro.cor}</p>
          <p>Estado: {carro.estado_do_veiculo}</p>
          <p>Portas: {carro.numero_de_portas}</p>
          <p>Quilometragem: {carro.quilometragem}</p>
          <p>Valor: R$ {carro.valor_carro}</p>
        </div>
    )} 
    </>
  )
}

export default BuscarPeloId