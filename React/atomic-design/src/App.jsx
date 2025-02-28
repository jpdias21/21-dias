import Label from "./components/Atoms/Label";
import Mensagem from "./components/Atoms/Mensagem";
import Botao from "./components/Atoms/Botao";

import { useState } from "react";

function App() {
    const [mensagem, setMensagem]= useState('')
    const [mensagemExibida, setMensagemExibida] = useState('')

    const mostrarMenssagem= ()=>{
        setMensagemExibida(mensagem)
    }
    

    return (
        <>
        <Label mensagem={mensagem} setMensagem={setMensagem}/>
        <Botao onClick={mostrarMenssagem}/>
        <Mensagem mensagemExibida={mensagemExibida}/>
        </>
    );
}

export default App;
