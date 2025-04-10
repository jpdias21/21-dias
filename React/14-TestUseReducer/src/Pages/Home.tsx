import Contador from '../components/Atoms/Contador'
import NovoContador from '../components/Atoms/NovoContador'
import Task from '../components/Atoms/Task'
import Teste from '../components/Atoms/Teste'
import './Home.css'

function App() {
  

  return (
    <>
     <Contador/>
     <hr className='hr'/>

     <NovoContador/>
     <hr className='hr'/>

     <Task/>
     <hr className='hr'/>

     <Teste/>
     <hr className='hr'/>
    </>
  )
}

export default App
