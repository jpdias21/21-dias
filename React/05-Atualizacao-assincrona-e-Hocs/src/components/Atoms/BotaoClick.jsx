import withContadorCliques from "../HOCs/withContadorCliques";

function BotaoClick({onClick, cliques}){

    return(
        <>
        <button onClick={onClick}>Voce clicou em mim : {cliques}</button>
        </>
    )
}

export default withContadorCliques(BotaoClick)