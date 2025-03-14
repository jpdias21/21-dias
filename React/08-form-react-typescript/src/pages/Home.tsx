///components
import ReviewForms from '../components/ReviewForms'
import Thanks from '../components/Thanks'
import UserForm from '../components/UserForm'
import Steps from '../components/Steps'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'


///Hooks
import {useForm} from '../hooks/useForm'

///
import './Home.css'
import { useState } from 'react'
///
type FormFields = {
  name : string,
  email : string,
  review : string,
  comments : string
}
const formTemplate: FormFields = {
  name :'',
  email :'',
  review :'',
  comments : '',
}
function App() {

  const [data, setData] = useState(formTemplate)
  const updateFieldHandler = (key:string, value:string) : void =>  {
    
    setData((prev) => {
      return {...prev, [key] :value}
    })
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler= {updateFieldHandler}/> ,
    <ReviewForms data={data} updateFieldHandler= {updateFieldHandler}/>,
    <Thanks data={data}/>,
  ]
  const { steps, currentComponent, currentStep, changeStep , isLastStep} = useForm({ steps: formComponents})
  return (
    <>
      <div className="header">
        <h2>Deixe sua avaliacao</h2>
        <p>
          Ficamos felizes com sua compra, utilize o formulario abaixo para avaliar o produto
        </p>
      </div>
      <div className="form-conteiner">
        <Steps currentStep={currentStep}/>
        <p>Passos</p>
        <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
          <div className="inputs-conteiner">{currentComponent}</div>
          <div className="actions"></div>
          <button type='button' onClick={() => changeStep(currentStep - 1)}>
          <GrFormPrevious/>
          <span>Voltar</span></button>
          
          {!isLastStep ? (<button type='submit'>
          <span>Avançar</span>
          <GrFormNext/>
          </button>) : (<button type='button'>
          <span>Enviar</span>
          <FiSend/>
          </button>)}
        </form>

      </div>
    </>
  )
}

export default App
