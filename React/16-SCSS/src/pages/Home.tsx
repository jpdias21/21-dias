/* https://newsapi.org/ site para pegar a api*/
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
        const response = axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2025-03-23&sortBy=publishedAt&apiKey=af029d26c40b4e9a907dd69168d12c47`)
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
    <div className='boxButton'>
    <button onClick={mostrar}>Mostrar conteúdo/ Outro conteúdo</button>
    </div>
    <div className='boxCenter'>
    {dados &&  
    <div>
    <section className='News'>
    <h1>News Multi-Information</h1>
    </section>

    <section className='NewsTextImagine'>
    
    <section >
    <img src={dados?.urlToImage} alt=""  width='400px'/> 
    </section >

     <section className='newsText'>
     <p id='titleNews'>{dados?.title}</p> 
  
     <p className='textInformation'>Description</p>
     <p>{dados?.description}</p> 
     
     <p className='textInformation'>Conteudo</p> 
     <p>{dados?.content}</p>
     <hr />
     <span className='Obs'> Nome: {dados?.name} | Autor: {dados?.author} | Data:  {dados?.publishedAt} </span>
     <br />
     </section>

    </section>
   
    </div>

    }
    </div>
    
    </>
  )
}

export default Home
