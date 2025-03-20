import Login from './Login'
import CloseAccount from './closeAccount'
import Registre from './Registre'
import './Home.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
function App() {


  return (
    <>
     <BrowserRouter>
     <nav>
    <button><Link to='/'>Home</Link></button>
    <button><Link to='/Login'>Login</Link></button>
    <button><Link to='/Registre'>Registre</Link></button>
    <button><Link to='/CloseAccount'>Close Account</Link></button>
      <Routes>
        <Route path='/' element={<>
        <h1>Faça a sua escolha</h1>
        </>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registre' element={<Registre/>}/>
        <Route path='/CloseAccount' element={<CloseAccount/>}/>
      </Routes>
     </nav>
     </BrowserRouter>
    </>
  )
}

export default App
