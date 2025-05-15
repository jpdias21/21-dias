import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FormBooks from '../components/FormBooks'
import './App.scss'

function App() {
  return (
   <>
   
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<FormBooks/>} />
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
