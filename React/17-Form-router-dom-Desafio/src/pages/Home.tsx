import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './Home.scss'
import LoginFeito from './LoginFeito'
import Form from './Form'

function Home() {


  return (
      <> 

    <BrowserRouter>
    <br />
      <Routes>
        <Route path='/Login' element={<LoginFeito/>}/>
        <Route path='/' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
      </>
  )
}

export default Home
