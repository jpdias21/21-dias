import './App.scss'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import CriateAccount from '../components/atoms/CriateAccount'
import LoginAccount from '../components/atoms/loginAccount'
import InitialPage from '../components/atoms/InitialPage'
import LoginRealizado from '../components/atoms/LoginRealizado'
function App() {
  

  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<InitialPage/>}/>
        <Route path='/CriateAccount' element={<CriateAccount/>}/>
        <Route path='/loginAccount' element={<LoginAccount />}/>
        <Route path='/LoginRealizado' element={<LoginRealizado />}/>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
