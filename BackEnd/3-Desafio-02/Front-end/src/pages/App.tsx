import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import RegisterVehicle from '../shared/components/Molecules/RegisterVehicle'
import './App.scss'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<RegisterVehicle/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
