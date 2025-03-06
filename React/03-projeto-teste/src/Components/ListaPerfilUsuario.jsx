export default function ListaPerfilUsuario({nome, idade, foto}){
  return(
    <>
    <h3>Seu nome : {nome}</h3>
    <h4>idade : {idade}</h4>
    <img className="imagem-usuario" src={foto} alt="" />
    <div className="linha"></div>
    </>
  )

    
}