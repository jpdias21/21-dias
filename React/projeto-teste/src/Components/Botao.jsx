import useContador from "../Hooks/useContador";

export default function Botao(){
    const {contador, aumentar, diminuir} = useContador()

    return (
        <>
        <p>Este e o contador {contador}</p>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
        </>
    )
}