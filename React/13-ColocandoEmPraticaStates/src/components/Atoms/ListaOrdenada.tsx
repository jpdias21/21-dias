import { Citacao } from "./TextoCitacao"; 
type ListaOrdenadaProps = {
  dadosComAvaliacao: Citacao[];
}

function ListaOrdenada({ dadosComAvaliacao }: ListaOrdenadaProps){
  if(!Array.isArray(dadosComAvaliacao)) return null
  const ordenada = [...dadosComAvaliacao].sort((a,b) =>  b.nota - a.nota)
  
 
  return (
    <>
    <ul>
    <h4 style={{color: 'red', fontSize: '30px'}}>Hanking </h4>
      {ordenada.map((event, index) => (
        <ol key={index}>
          <p>Autor: {event.autor} / Texto : {event.texto}</p> <span style={{color: 'blue'}}>Nota : {event.nota}</span>
        </ol>
      ))}
    </ul>
   
    </>
  );
};

export default ListaOrdenada;

/*Esse código cria um componente chamado ListaOrdenada, que recebe uma lista de citações avaliadas (dadosComAvaliacao), ordena essas citações pela nota (da maior para a menor) e exibe o ranking.

Passo a passo
Importação do tipo Citacao

Importa o tipo Citacao de TextoCitacao.tsx para garantir que os dados tenham a estrutura correta (autor, texto e nota).

Definição do tipo ListaOrdenadaProps

Define que o componente recebe uma props chamada dadosComAvaliacao, que é um array de Citacao.

Função ListaOrdenada({ dadosComAvaliacao })

Se dadosComAvaliacao não for um array, retorna null para evitar erros.

Copia os dados ([...dadosComAvaliacao]) e os ordena do maior para o menor com .sort((a, b) => b.nota - a.nota).

Renderização (return)

Exibe um título "Hanking" em vermelho.

Usa .map() para percorrer a lista ordenada e mostrar cada citação com o nome do autor, o texto e a nota.

Resumo
O componente ListaOrdenada pega as citações avaliadas, ordena da maior nota para a menor e exibe o ranking. */