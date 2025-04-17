/* 95b0f2ec3318ffaff16781d5711d1556  */
/*  O css feito pela claude Ai, tirei algumas duvidas tambem para me ajudar, muito boa esta Ia */
/*https://api.openweathermap.org/data/2.5/weather?q=curitiba&appid=95b0f2ec3318ffaff16781d5711d1556 */
import { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'

type Dados = {
  nomeCidade : string ,
  temperatura : number ,
  sensacaoTermica : number,
  clima: string,
  umidade: string,
  vento: string,
  nascerDoSol: string,
  porDoSol: string
}
function App() {
  const APIKey = '95b0f2ec3318ffaff16781d5711d1556'
  
  const [cidade, setCidade] = useState<string>('')
  const [dados, setDados] = useState<Dados | null>(null)
  const [menssagemErro, setMenssagemErro] = useState<boolean>(false)

  const responseData = async (event : any) => {
      event.preventDefault()
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIKey}&units=metric&lang=pt`)
        const dadosExtraidos = {
        nomeCidade : response.data.name ,
        temperatura : response.data.main.temp ,
        sensacaoTermica : response.data.main.feels_like ,
        clima: response.data.weather[0].description,
        umidade: response.data.main.humidity,
        vento: response.data.wind.speed,
        nascerDoSol: new Date(response.data.sys.sunrise * 1000).toLocaleTimeString(),
        porDoSol: new Date(response.data.sys.sunset * 1000).toLocaleTimeString()
        }
        setDados(dadosExtraidos)
        setMenssagemErro(false)
      } catch (error) {
        console.error('error', error)
        setMenssagemErro(true)
      }
      
  }
     
  return (
    <>
  {menssagemErro ? <p className='erro'>Provavelmente voce digitou errado</p> : ''}
    <form onSubmit={responseData}>
      <h2>Veja o clima no seu Pais/Cidade/Estado</h2>
      <input type="text" value={cidade} placeholder='Digite o nome da cidade' onChange={(event) => setCidade(event.target.value)}/>
      <br />
      <br /> <hr />
      <button>Buscar</button>
    </form>
      <p> Cidade : {dados?.nomeCidade} </p>
      <p> Temperatura : {dados?.temperatura} </p>
      <p> Sensação Térmica: {dados?.sensacaoTermica.toFixed(1)} °C </p>
      <p> Clima: {dados?.clima} </p>
      <p> Umidade: {dados?.umidade} </p>
      <p> Vento: {dados?.vento} </p>
      <p> Nascer Do Sol: {dados?.nascerDoSol} </p>
      <p> Por Do Sol: {dados?.porDoSol} </p>
    </>
  )
}

export default App
