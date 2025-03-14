import axios from 'axios'
import React, { useState } from 'react'
type Post = {
    id: number;
    title: string;
    body: string;
  };
type PostFormProps = {
    handleSuccess: (post: Post, operation: string) => void; // Tipagem da prop
  };

const  PostForm = ({ handleSuccess } : PostFormProps) => {
  
    const [title, setTitle]= useState<string>('')
    const [body, setBody] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title, body
            })
            console.log('Tttle e body criado', response.data)
            handleSuccess(response.data, 'add')

        } catch (error) {
            console.error('Error ao criar', error)
        }

    }

    return (
    <form onSubmit={handleSubmit}>
        <label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Digite um titulo' />
        </label>
        <br />
        <label>
            <textarea value={body} onChange={(event) => setBody(event.target.value)} placeholder='Digite algum texto'></textarea>
        </label>
        <br />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default PostForm