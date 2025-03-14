import React, { useEffect, useState } from 'react'
import axios from 'axios'

type Post = {
    id : number,
    name : string,
    body : string
}

const PostManager = ()=> {
    const [result, setResult] = useState<Post[]>([])   
    const [error, setError] = useState<string>()
    useEffect(()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts")
        .then((event) =>{
            setResult(event.data)
        })
        .catch((error) =>{
            console.error('Erro de requisicao' , error)
            setError(error.mensage)
        })
    },[])
  
return (
    <>
    <h2>PostManager</h2>
    {error ? () : ()}
    </>
    
  )
}

export default PostManager