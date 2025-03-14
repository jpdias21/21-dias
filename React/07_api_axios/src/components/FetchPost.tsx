import React, { useEffect, useState } from 'react'
type Post = {
  id : number
  title : string
  body : string
}
const FetchPost = () => {
  
  const [salvarPost, setSalvarPost] = useState<Post[]>([])
  const [error, setError] = useState<string>("")

  useEffect(() => {

    const FetchPost = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        setSalvarPost(data)
      } catch (error ) {
        setError((error as Error).message)
      }
    }
    FetchPost()
  } , [])

  return (
    <div>
      <h1>Post (Fetch API)</h1>
      {error ? (<p>Erro: {error}</p>) : (
        salvarPost.map((event ) => (
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

export default FetchPost