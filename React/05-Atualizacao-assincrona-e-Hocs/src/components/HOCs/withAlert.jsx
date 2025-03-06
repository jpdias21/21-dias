
const withAlert = (ComponenteOriginal) => {

    return(props) =>{
        const clicou = () => {
            alert('Voce clicou no botao')
        } 
        return <ComponenteOriginal onClick={clicou} {...props}/>
    }
}

export default withAlert