import { useEffect, useState } from "react";


function Opcoes(){
    const [texto, setTexto] = useState('posts') 

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${texto}`)
        .then(response => response.json())
        .then(json => console.log(json))
    }, [texto])
    return (
        <>
        <button onClick= {()=> setTexto( 'posts')}>Post</button>
        <button onClick= {()=> setTexto( 'users')}>Users</button>
        <button onClick= {()=> setTexto( 'comments')}>Coments</button>
            <div>
                <h1>{texto}</h1>
        </div>
</>
    )
    
}

export default Opcoes