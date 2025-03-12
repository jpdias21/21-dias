///components
import ReviewForms from '../components/ReviewForms'
import Thanks from '../components/Thanks'
import UserForm from '../components/UserForm'


import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

///Hooks
import './Home.css'

function App() {


  return (
    <>
      <div className="header">
        <h2>Deixe sua avaliacao</h2>
        <p>
          Ficamos felizes com sua compra, utilize o formulario abaixo para avaliar o produto
        </p>
      </div>
      <div className="form-conteiner">
        <p>Passos</p>
        <form>
          <div className="inputs-conteiner"></div>
          <div className="actions"></div>
          <button>
          <GrFormPrevious/>
          <span>Voltar</span></button>
          <button>
          <span>Avançar</span>
          <GrFormNext/>
          </button>
        </form>
      </div>
    </>
  )
}

export default App
