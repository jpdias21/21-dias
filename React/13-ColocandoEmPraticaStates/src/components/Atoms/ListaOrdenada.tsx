// Definindo a interface para as props do componente ListaOrdenada
interface ListaOrdenadaProps {
  dadosComAvaliacao: Citacao[];  // Tipagem correta aqui
}

// Componente ListaOrdenada tipado corretamente
const ListaOrdenada: React.FC<ListaOrdenadaProps> = ({ dadosComAvaliacao }) => {
  return (
    <>
    
    </>
  );
};

export default ListaOrdenada;
