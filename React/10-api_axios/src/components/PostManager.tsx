import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostForm from './PostForm'

type Post = {
    id : number,
    title : string,
    body : string
}


const PostManager = ()=> {
    const [result, setResult] = useState<Post[]>([])   
    const [error, setError] = useState<string>()

    const handleSuccess = (post: Post, operation:string) => {
        if(operation === 'add'){
            setResult((currentPost) => [post, ...currentPost])
        }
    }
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((event) =>{
            setResult(event.data.slice(0, 5))
        })
        .catch((error) =>{
            console.error('Erro de requisicao' , error)
            setError(error.mensage)
        })
    },[])
  
return (
    <div>
        <h1>Gerenciar Post</h1>
        <PostForm handleSuccess={handleSuccess}/>
      <h1>Post Manager (Axios API)</h1>
      {error ? (
        <p>Erro: {error}</p>
      ) : (
        result.map((event) => (
          <div key={event.id}>
            <h2>{event.id}</h2>
            <h2>{event.title}</h2>
            <h2>{event.body}</h2>
            <button >Adicionar</button>
          </div>
        ))
      )}
    </div>
    
  )
}

export default PostManager