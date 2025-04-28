import { useEffect, useState } from 'react'
import './Home.scss'

function Home() {
  
  const [formValues, setFormValues] = useState({name : '', age: ''})
  const [disable , setDisable] = useState(true)

  const handleSubmit = (event : any) => {
    event.preventDefault()
    console.log('clicou')
    console.log(formValues)
    setDisable(true)
    setFormValues({name : '', age: ''})
    
  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({...formValues, [event.target.name] :event.target.value })
  }

  useEffect(() => {
    if(formValues.name && formValues.age){
      setDisable(false)
    }
  }, [handleSubmit])
  return (
    <>
    <h2>Formulario</h2>
   <form >
    <input type="text" name='name' value={formValues.name} onChange={handleChange} placeholder='Digete seu nome'/>
    <br />
    <input type="text" name='age' value={formValues.age} onChange={handleChange} placeholder='Digite sua idade' />
    <br />
    <br />
    <button onClick={handleSubmit} disabled={disable}>Enviar</button>
   </form>
    </>
  )
}

export default Home
