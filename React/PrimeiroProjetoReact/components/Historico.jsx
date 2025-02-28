import ItemHistorico from "./ItemHistorico";

export default function Historico({historico}){

    return(
        <>
        {historico.length > 0 ? (
            historico.map((event, index) => (
                <ItemHistorico
               key = {index}
               operacao = {event}
               />
            ))
        ) : (
            <p>Nenhum calculo ainda</p>
        )}
        </>
    )
}

