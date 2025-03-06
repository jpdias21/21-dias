import useTexto from "../Hooks/useTexto";


export default function CaixaDeTexto(){
    const {texto, mudarTexto, limparTexto} = useTexto('')

    return(
        <>
        <input type="text" value={texto} onChange={(event) => mudarTexto(event.target.value)} />
        <p>Texto que voce digitou: {texto}</p>
        <br />
        <button onClick={limparTexto}>Limpar texto</button>
        </>
        
    )
}