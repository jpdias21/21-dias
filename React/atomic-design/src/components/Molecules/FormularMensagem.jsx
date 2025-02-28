import { useState } from "react";
import Botao from "../Atoms/Botao";
import Label from "../Atoms/Label";
import Mensagem from "../Atoms/Mensagem";

export default function FormularioMensagem(){
    const [mensagem, setMensagem] = useState('')
    const [mensagemExibida, setMensagemExibida] = useState('')

    const exibirMensagem = ()=> {
        setMensagemExibida(mensagem)
    }

    return(
        <>
        <Label mensagem={mensagem} setMensagem={setMensagem}/>
        <Botao onClick={exibirMensagem} />
        <Mensagem mensagem={mensagemExibida}/>
        </>
    )
}