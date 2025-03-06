import withAlert from '../HOCs/withAlert'

function Botao({onClick}){

    return(
        <>
        <button onClick={onClick}>Clique aqui</button>
        </>
    )
}
export default withAlert(Botao)