import {useState} from 'react'
function withHoverEffect(NovoComponente){

    return(props) => {
        const [estaDentroMouse, setEstaDentroMouse] = useState(false)

        const estaNoMouse = () =>{
            setEstaDentroMouse(true)
        }

        const noaoEstaNoMouse = () => {
            setEstaDentroMouse(false)
        }    

        return <NovoComponente onMouseEnter={estaNoMouse}  onMouseLeave={noaoEstaNoMouse} estaDentroMouse={estaDentroMouse} {...props} />
    } 
        
}

export default withHoverEffect 