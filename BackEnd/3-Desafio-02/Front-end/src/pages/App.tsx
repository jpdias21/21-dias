import { BrowserRouter, Route, Routes} from 'react-router-dom'
import RegisterVehicle from '../shared/components/Molecules/RegisterVehicle'
import BuscarPeloId from '../shared/components/Atoms/BuscarPeloId'
import './App.scss'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<BuscarPeloId/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
