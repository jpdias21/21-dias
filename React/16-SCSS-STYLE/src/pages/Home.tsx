import { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'

type Dados = {
  
  name : string ,
  author : string ,
  title : string ,
  description : string ,
  urlToImage : string ,
  publishedAt : string ,
  content : string,
}
function Home() {
  const [dados, setDados] = useState<Dados | null > (null)
  const [number, setNumber] = useState<number>(0)
  
    const mostrar = async () => {
      try {
        const response = axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2025-03-22&sortBy=publishedAt&apiKey=17a25b5834c448a6bc5e27afc029034d`)
       const responseApi = (await response).data
       
       const primeiroArtigo = responseApi.articles[number]
       if(number >= number){
        setNumber(number+1)
      }
       const dadosExtraidos =  {
        
        name : primeiroArtigo.source.name ,
        author : primeiroArtigo.author,
        title : primeiroArtigo.title ,
        description : primeiroArtigo.description ,
        urlToImage : primeiroArtigo.urlToImage ,
        publishedAt : primeiroArtigo.publishedAt ,
        content : primeiroArtigo.content
       }
       setDados(dadosExtraidos)
      } catch (error) {
        console.error('errorr', error)
      }
    }
   
    useEffect(() => {
      console.log(dados)
    }, [dados])

  return (
    <>
    <button onClick={mostrar}>Passar</button>
    <div className='boxCenter'>
    {dados &&  
    <div>
    <h1 className='News'>Noticias</h1>
    
     <p className='Tema'>Nome</p>
     <p>{dados?.name}</p>
     <p className='Tema'>Autor</p> 
     <p>{dados?.author}</p>
    <p className='Tema'>Titulo</p> 
     <p>{dados?.title}</p> 
     <p className='Tema'>Description</p>
     <p>{dados?.description}</p> 
     <img src={dados?.urlToImage} alt=""  width='300px'/> 
     <p className='Tema'>Dada de publicao</p>
     <p>{dados?.publishedAt}</p> 
     <p className='Tema'>Conteudo</p> 
     <p>{dados?.content}</p>
    
    </div>

    }
    </div>
    
    </>
  )
}

export default Home
