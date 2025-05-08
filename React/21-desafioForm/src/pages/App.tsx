import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.scss'
import Formulario from '../components/Formulario'
import Home from '../components/Home'
function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Formulario" element={<Formulario/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
