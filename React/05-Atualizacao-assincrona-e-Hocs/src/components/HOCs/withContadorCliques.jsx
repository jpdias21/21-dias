import {useState} from 'react'

const withContadorCliques = (Componente) => {

    return(props) => {
        const [contador, setContador] = useState(0)
        const clicou = () =>{
            setContador(contador + 1)
        }
      return <Componente onClick={clicou} cliques={contador} {...props}/>
    }
} 
export default withContadorCliques