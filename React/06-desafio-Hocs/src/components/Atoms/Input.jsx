import withHoverEffect from '../Hocs/withHoverEffect'

function Input({onMouseEnter, onMouseLeave, estaDentroMouse}){
   let mensagem ;
    if(estaDentroMouse === true){
    mensagem = 'Voce esta no input'
   }else if(estaDentroMouse === false){
    mensagem = 'Voce nao esta no input'
   }

    return(
        <>
        <input type="text"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}     
        title= {estaDentroMouse ? "Voce esta sobre o input" : ''}
        placeholder={estaDentroMouse ? 'Voce esta no input' : 'Voce nao esta no input'}   
        />
        <br />
        <br />
        <br />
        {mensagem}
        </>
    )
}
export default withHoverEffect(Input)