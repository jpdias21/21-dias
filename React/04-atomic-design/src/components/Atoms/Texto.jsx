import './Atoms.css'
export default function Texto({children}){

    return(
        <>
        <p className='aparecerTexto'>{children}</p>
        </>
    )
}