export default function PerfilUsuario({nome, idade, foto}){
return (
    <>
    <div>
        <h3 className="nome-usuario">Nome : {nome}</h3>
        <h4>Idade : {idade}</h4>
        <img className="imagem-usuario" src={foto} alt="" />
        <div className="linha"></div>
    </div>
    </>
)
}