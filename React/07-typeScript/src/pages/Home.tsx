import Calculador from "../components/Calculador"

// 4- Impoetacao de componente 
import FirstComponent from "../components/FirstComponent"

/// 5- Desestruturando props

import SecondComponent from "../components/SecondComponent"
import Destructuring, {Category} from "../components/Destructuring"


// 6-useState
import State from "../components/State"

type textOrNull = string | null; 
// 8 - type 
const myText:textOrNull = 'Este e meu texto' ; 
let secondText: textOrnull = null ;

secondText = 3

function App() {
 
 // 1- Variaveis
  const name: string = 'Joao'
  const age: number = 30
  const trabalho: boolean = true
  const otherName : string = 'Renato almeida'

 // 2- Funcoes
  const userGreeting = (event : string) =>{
    return `Ola ${event}`
  }
  return (
    <>
     <FirstComponent/>
     <h2>nome : {name}</h2>
     <h3>idade : {age}</h3>
    {trabalho ? <p>Trabalho : Esta trabalhando</p> : <p>Trabalho : Nao esta trabalhando</p> }
    <br />
    <h3>{userGreeting(otherName)}</h3>
    <br />
    <br />
    <SecondComponent text='PROPS'name='SEGUNDO NOME'/>
    <br />
    <br />
    <Destructuring 
    title='Primeiro Post' 
    content="Primeiro conteudo" 
    commentsQty={10} 
    tags={['js', 'ts', 'index', ]}
    category={Category.Js}
    />
    <br />
    <Destructuring
    title="Segundo post"
    content="Segundo conteudo"
    commentsQty={9}
    tags={['Joao', 'Pedro', 'O melhor']}
    category={Category.Ts}
    />
    <br />
    <State/>
    <br />
    <br />
    <Calculador/>
    </>
  )
}

export default App
