import './Atoms.css'

export default function Botao({onClick, children}){

    return(
        <>
        <button className='button' onClick={onClick}>{children}</button>
        </>
    )
}