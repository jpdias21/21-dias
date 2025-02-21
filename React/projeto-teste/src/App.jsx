import './App.css'
import Botao from './Components/Botao'
import CaixaDeTexto from './Components/CaixaDeTexto'
import Opcoes from './Components/Opcoes'
import Visibilidade from './Components/Visibilidade'
import Mensagem from './Components/Mensagem'
import Cartao from './Components/Cartao'
import PerfilUsuario from './Components/PerfilUsuario'
function App() {
  return (
    <>
      <h1>Ola mundo</h1>
      <h3>Eu estou aqui</h3>
      <Botao />
      <br />
      <Opcoes />
      <br/>
      <CaixaDeTexto />
      <br />
      <br />
      <br />
      <Visibilidade/>
      <br />
      <Mensagem texto='Ola seja bem vindo' />
      <br />
      <Cartao 
      corFundo='red'
      titulo = 'Testando'
      descricao = 'Estou arendendo o Props'
      />
      <br />
      <Cartao 
      corFundo = 'blue'
      titulo ='Segundo cartao'
      descricao='fazendo a exercio do chat gpt'
      />
      <br />
      <PerfilUsuario 
      nome = 'Joao Pedro'
      idade = '22'
      foto = 'https://i.pravatar.cc/150?img=3'
      />
      <br />
      <PerfilUsuario 
      nome = 'Renato'
      idade = '32'
      foto = 'https://i.pravatar.cc/150?img=4'
      />
      
    </>
  )
}

export default App
