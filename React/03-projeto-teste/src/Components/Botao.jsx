import useContador from "../Hooks/useContador";

export default function Botao(){
    const{contador , aumentar , diminuir} = useContador(0)

    return(
        <>
        <p>Contagem do contador {contador} </p>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
        </>
    )
}