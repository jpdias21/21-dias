import React, { useRef } from 'react';

const Contador = () => {
  const contadorRef = useRef<number>(0); // Armazena o valor do contador
  const spanRef = useRef<HTMLSpanElement | null>(null); // Referência para atualizar o texto do contador

  const contador = () => {
    contadorRef.current += 1; // Atualiza o número do contador
    if (spanRef.current) {
      spanRef.current.textContent = contadorRef.current.toString(); // Atualiza o número na tela
    }
  };

  return (
    <>
      <span ref={spanRef}>{contadorRef.current}</span>
      <br />
      <button onClick={contador}>Clique aqui</button>
    </>
  );
};

export default Contador;
