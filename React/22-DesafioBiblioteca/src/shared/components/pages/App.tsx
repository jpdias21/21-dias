import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FormBooks from '../Atoms/FormBooks'
import InitialPages from '../Atoms/InitialPages'
import ControlarEmprestimos from '../Molecules/ControlarEmprestimos'
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
