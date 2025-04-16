
import axios from 'axios'
import './Home.css'
import { useState } from 'react'

function Home() {
 const [imagem, setImagem] = useState()
 const outraFoto = async() => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log('respose', response.data.message)
    setImagem(response.data.message)

  } catch (error) {
   console.error('erro', error) 
  }
 }

  return (
    <>
   <img src={imagem} alt="" width={300} height={200} />
   <br />
   <button onClick={outraFoto}>Pular</button>
    </>
  )
}

export default Home
