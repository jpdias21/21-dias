
export default function Label({mensagem, setMensagem}){
        
    return(
        <>
        <label>
            <input type="text" value={mensagem} onChange={(event)=> setMensagem(event.target.value)} />
        </label>
        </>
    )
}