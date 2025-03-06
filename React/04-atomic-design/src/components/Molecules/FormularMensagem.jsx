import { Titulo, Input, Botao, Texto } from "../Atoms";
import './molecules.css'
import { useState } from 'react'

export default function FormularioMensagem(){
    const [mensagem, setMensagem] = useState('')
    const [exibirMensagem, setExibirMensagem] = useState('')

    function mostrarMensagem(){
        setExibirMensagem(mensagem)
    }
    
    return(
        <>
        <div className="FormularMensagem">
        <Titulo className='FormMensagem'>Formulario de mensagem</Titulo>
        <Input mensagem={mensagem} setMensagem={setMensagem}/>
        <Botao onClick={mostrarMensagem}>Mostrar Mensagem</Botao>
        <Texto>{exibirMensagem}</Texto>
        </div>
        
        </>
    )
}