
export default function Cartao({titulo, descricao, corFundo}){
    return(
        <>
        <div style={{backgroundColor : corFundo}}>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        </div>
        </>
    )
}