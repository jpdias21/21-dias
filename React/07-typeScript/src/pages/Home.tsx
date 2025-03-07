
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
      <h1>Ola mundo</h1>
     <h2>nome : {name}</h2>
     <h3>idade : {age}</h3>
    {trabalho ? <p>Trabalho : Esta trabalhando</p> : <p>Trabalho : Nao esta trabalhando</p> }
    <br />
    <h3>{userGreeting(otherName)}</h3>
    </>
  )
}

export default App
