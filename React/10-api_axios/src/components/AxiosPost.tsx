import React, { useEffect, useState } from 'react'
import axios from 'axios'

type Post ={
  id: number
  title : string
  body : string 
}
const AxiosPost = () => {
  console.log("Componente AxiosPost renderizado")
  const [response, setResponse] = useState<Post[]>([])
  const [error, setError] = useState<string>()

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((event) =>{
      console.log('Dados recebidos', event)
      setResponse(event.data.slice(0, 5))
    } )
    .catch((error) =>{
      console.error('Error na requicisao', error)
      setError(error.message)
    } )
  }, [])
  return (
    <div>
      <h1>Post (Axios Post)</h1>
      {error ? (<p>Erro: {error}</p>) : (
        response.map((event) => (
          <div key={event.id}>
            <h2>{event.id}</h2>
            <h2>{event.title}</h2>
            <h2>{event.body}</h2>
          </div>
        ))
      )}
    
    </div>
  )
}

export default AxiosPost