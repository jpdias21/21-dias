import React from 'react'
import axios from 'axios'

const API_URL = "https://apigenerator.dronahq.com/api/04PNM4fR/meuTesteApi"

export const Registre = async (name : string, email: string, passWord: string)=> {
    try {
      const response = await axios.post(API_URL, {name, email, passWord})
      console.log("Registro Feito com sucesso", response.data)
      alert('Registro feito com sucesso')
    } catch (error) {
      console.error('Erro no registro', error)
    }
 }

 export const Login = async(name : string , email :string, passWord: string) =>{
  try {
    const response = await axios.get(API_URL)
  const user = response.data.find(
    (user:any) => user.name === name && user.email === email && user.passWord === passWord
  )
  if(user){
    console.log('login realizado com sucesso', user)
  }else{
    console.log('usuario oou senha incorreta')
  }

  } catch (error) {
    console.error('Erro no login', error)
  }
 }

 export const CloseAccount = async(name : string ,email : string, passWord: string) => {
  try {
    const response = await axios.delete(API_URL)
    const user = response.data.find(
      (user:any) => user.name === name && user.email === email && user.passWord === passWord
    )
    if(user){
      await axios.delete(`${API_URL}/${user.id}`);
      console.log('Conta encerrada com sucesso', response.data)
    }else{
      console.log('email ou senha incorrete')
    }
  } catch (error) {
    console.error('Erro em excluir a conta', error)
  }
 }


