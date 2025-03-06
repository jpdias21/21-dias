import {useState} from 'react'
function withHoverEffect(Componente){

    return(props) => {
        const [estaDentro, setEstaDentro] = useState(false)
        
        const estaDentroInput = () =>{
            setEstaDentro(true)
        }

        const naoEstaDentro = () =>{
            setEstaDentro(false)
        }
    return <Componente onMouseEnter={estaDentroInput}  onMouseLeave={naoEstaDentro} estaDentro={estaDentro} {...props}/>

    } 
}

export default withHoverEffect 