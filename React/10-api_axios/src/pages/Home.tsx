import {BrowserRouter,Route, Routes, Link } from 'react-router-dom'
import './Home.css'
import AxiosPost from '../components/AxiosPost'
import FetchPost from '../components/FetchPost'
import PostManager from '../components/PostManager'

function App() {


  return (
    <>
    <h1>Get com Fetch com Axios</h1>
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/AxiosPost">Axios Posts</Link>
    <br />
    <Link to="/FetchPost">Fetch Post</Link>
  {/* Continuando requicisao de POS e Update/Put*/}
  <br />
    <Link to="/PostManager">Post Manager</Link>

    <Routes>
      <Route path='/AxiosPost' element={<AxiosPost/>}/>
      <Route path='/FetchPost' element={<FetchPost/>}/>
      <Route path='/PostManager' element={<PostManager/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
