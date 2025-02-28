
export default function Label({mensagem, setMensagem}){

    return(
        <>
        <label>
        <input type="text" placeholder="Digite alguma coisa" value={mensagem} onChange={(event) => setMensagem(event.target.value)}/>
        </label>
        </>
    )
}