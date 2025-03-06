
const withAlert = (componenteOriginal) => {

    return(props) =>{
        const clicou = () => {
            alert('Voce clicou no botao')
        } 
        return <componenteOriginal onClick={clicou} {...props}/>
    }
}

