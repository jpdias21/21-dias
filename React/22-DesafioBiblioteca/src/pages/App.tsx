import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FormBooks from '../shared/components/FormBooks'
import InitialPages from '../shared/components/InitialPages'
import ControlarEmprestimos from '../shared/components/controlarEmprestimos'
import './App.scss'

function App() {
  return (
   <>
   
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<InitialPages/>} />
      <Route path="/FormBooks" element={<FormBooks/>} />
      <Route path='/contralarEmprestimos' element={<ControlarEmprestimos/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
