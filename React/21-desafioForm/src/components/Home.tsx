import { useNavigate } from "react-router-dom" 
function Home() {
    const navigate = useNavigate() 
    function cadastrar () {
        navigate('/Formulario')
    }
  return (
   <>
   <button onClick={cadastrar}>Cadastrar produto</button>
   <button>Verificar produtos cadastrados</button>
   </>
  )
}

export default Home