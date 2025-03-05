import './Atoms.css'
export default function Input({mensagem, setMensagem}){

    return(
        <>
        <input type="text" className='input' value={mensagem} placeholder="Digite algo" onChange={(event) => setMensagem(event.target.value)}/>
        </>
    )
}