import { Citacao } from "./TextoCitacao"; 

type ListaOrdenadaProps = {
  dadosComAvaliacao: Citacao[];
}

function ListaOrdenada({ dadosComAvaliacao }: ListaOrdenadaProps){
  const ordenada = dadosComAvaliacao.sort((a,b) => a.nota - b.nota)
  console.log(ordenada)
  return (
    <>
    
    </>
  );
};

export default ListaOrdenada;
