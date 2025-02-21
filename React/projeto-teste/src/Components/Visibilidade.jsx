import useVisibilidade from "../Hooks/useVisibilidade"


export default function Visibilidade(){
    const {visivel, alterarVisibilidade} = useVisibilidade()

    
    return(
        <>
         {visivel && <p>Esse é o texto secreto!</p>} {/* Só mostra o parágrafo se 'visivel' for true */}
         
         <p>Visível está: {visivel ? 'Verdadeiro' : 'Falso'}</p>


         <button onClick={alterarVisibilidade}>Visivel / Invisivel</button>
        </>
    )
}