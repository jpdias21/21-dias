import './App.css'
import Botao from './Components/Botao'
import CaixaDeTexto from './Components/CaixaDeTexto'
import Opcoes from './Components/Opcoes'
import Visibilidade from './Components/Visibilidade'
import Mensagem from './Components/Mensagem'
import Cartao from './Components/Cartao'
import PerfilUsuario from './Components/PerfilUsuario'
import ListaPerfilUsuario from './Components/ListaPerfilUsuario'
import BotaoProps from './Components/BotaoProps'
function App() {
  const usuarios = [
    { nome: "Ana", idade: 25, foto: "https://i.pravatar.cc/150?img=5" },
    { nome: "Carlos", idade: 30, foto: "https://i.pravatar.cc/150?img=6" },
    { nome: "Maria", idade: 27, foto: "https://i.pravatar.cc/150?img=7" },
    { nome: "João", idade: 22, foto: "https://i.pravatar.cc/150?img=8" },
  ];

  const botao = [
    {nome : 'Clique em mim 1', color : "red" , link : 'https://google.com'},
    {nome : 'Clique em mim 2', color : "blue", link : 'https://google.com' },
    {nome : 'Clique em mim 3', color : "green", link : 'https://google.com' },
    {nome : 'Clique em mim 4', color : "gray", link : 'https://google.com' },
  ]
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
      <br />

    {usuarios.map((event) =>(
      <ListaPerfilUsuario 
      key = {event.nome}
      nome = {event.nome}
      idade = {event.idade}
      foto = {event.foto}
      />
    ))}
    <br />
    {botao.map((event) => (
      <BotaoProps
      key = {event.nome}
      nome = {event.nome}
      color = {event.color}
      link = {event.link}
      />
    ))}
      
    </>
  )
}

export default App
