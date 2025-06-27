import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CriateAccount() {

 const [name, SetName] = useState<string>('')
 const [surname, SetSurname] = useState<string>('')
 const [email,SetEmail] = useState<string>('')
 const [phone,SetPhone] = useState<string>('')
 const [password,SetPassWord] = useState<string>('')
 const [confirmPassWord,SetConfirmPassWord] = useState<string>('')
const [showPassWord, SetShowPassWord] = useState<boolean>(false)
const [errorPassWord, SetErrorPassWord] = useState<boolean>(true)
const navigate = useNavigate()
  
  const handleCreatAccount = (event : any) => {
    event.preventDefault()
      if(password != confirmPassWord){
        SetErrorPassWord(false)
        return
      }
      try {
        axios.post('http://localhost:3000/cadastro', {name,surname,email,phone,password})
        console.log('cadastro realixado com sucesso')
        navigate('/loginAccount')

      } catch (error) {
        console.log('deu ruim no cadastro')
        console.error(error)
      }
  }
  
  const handleShowPassWord = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    SetShowPassWord(!showPassWord)
    return
  }

  return (
    <>
       <form onSubmit={handleCreatAccount}>
        <h3>Crie sua conta</h3>
      <label>Nome: </label>
      <input type="text" value={name} placeholder='Digite seu primeiro nome' required onChange={(event) => SetName(event.target.value)} />
      <br />
      <label>Sobrenome: </label>
      <input type="text" value={surname} placeholder='Digite seu sobrenome' required onChange={(event) => SetSurname(event.target.value)}/>
      <br />
      <label>Email: </label>
      <input type="email" value={email} placeholder='Digite seu Email' required onChange={(event) => SetEmail(event.target.value)}/>
        <br />
      <label>Numero: </label>
      <input type="text" value={phone} placeholder='Digite seu numero' required onChange={(event) => SetPhone(event.target.value)}/>
      <br />
      <label>Senha: </label>
      <input type={showPassWord ? 'text' : 'password'} minLength={8} value={password} placeholder='Digite sua senha' required onChange={(event) => SetPassWord(event.target.value)}/>
      <br />
      <label>Repita a senha: </label>
      <input type={showPassWord ? 'text' : 'password'} minLength={8} value={confirmPassWord} placeholder='Digite sua senha' required onChange={(event) => SetConfirmPassWord(event.target.value)}/>
      <button onClick={handleShowPassWord}>Mostra senha</button>
      <br />
      <br />
      <button type='submit'>Cadastrar</button>
    </form>

    {errorPassWord ? '' : <p>A senha está incorreta ou voce fez uma senha com menos de 8 caracteres.</p>}
    </>
  )
}

export default CriateAccount