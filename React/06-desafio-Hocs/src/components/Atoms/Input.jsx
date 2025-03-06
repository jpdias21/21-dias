
import withHoverEffect from '../Hocs/withHoverEffect'


function Input({estaDentro,onMouseEnter, onMouseLeave}){
    

    return(
        <>
        <input type="text" 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}/>
        <br />
        <br />
        <br />
        <br />
        <br />
        {estaDentro  && <p>Voce esta sobre o input</p>}
        </>
    )
}
export default withHoverEffect(Input)