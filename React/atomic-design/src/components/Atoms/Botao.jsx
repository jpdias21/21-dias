export default function Botao({onClick,children}){

    return(
        <>
        <button onClick={onClick}>{children}</button>
        </>
    )
}