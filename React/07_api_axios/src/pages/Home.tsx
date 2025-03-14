import {BrowserRouter,Route, Routes, Link } from 'react-router-dom'
import './Home.css'
import AxiosPost from '../components/AxiosPost'
import FetchPost from '../components/FetchPost'

function App() {


  return (
    <>
    <h1>Get com Fetch com Axios</h1>
    <BrowserRouter>
    <Link to="/AxiosPost">Axios Posts</Link>
    <br />
    <Link to="/FetchPost">Fetch Post</Link>

    <Routes>
      <Route path='/AxiosPost' element={<AxiosPost/>}/>
      <Route path='/FetchPost' element={<FetchPost/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
