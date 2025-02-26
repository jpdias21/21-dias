import ItemHistorico from "./ItemHistorico";

export default function Historico({ resultados }) {
  return (
    <div className="historico">
      <h2>Histórico</h2>
      {resultados.length > 0 ? (
        resultados.map((resultado, index) => (
          <ItemHistorico 
            key={index} 
            operacao={resultado} 
          />
        ))
      ) : (
        <p>Nenhum cálculo realizado ainda.</p>
      )}
    </div>
  );
}