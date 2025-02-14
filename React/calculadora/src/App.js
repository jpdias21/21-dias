import { useState, useEffect } from 'react';

function ContadorComTitulo() {
  const [contador, setContador] = useState(0);

  // Atualiza o título da página sempre que o contador mudar
  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`;
  }, [contador]); // Roda toda vez que 'contador' mudar

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
}

export default ContadorComTitulo;
