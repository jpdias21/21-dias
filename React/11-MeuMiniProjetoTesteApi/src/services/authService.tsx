import React from 'react'
import axios from 'axios'
import Form from '../components/Form'
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

 export const Login = async(email :string, passWord: string) =>{
  try {
    const response = await axios.get(API_URL)
  const user = response.data.find(
    (user:any) => user.email === email && user.passWord === passWord
  )
  if(user){
    console.log('Seu login realizado', user.id)
    
    return user.id
  }else{
    console.log('Email ou senha incorretos.');
    throw new Error("Email ou senha incorretos.")
  }

  } catch (error) {
    console.error('Erro no login', error)
  }
 }

 export const CloseAccount = async(name : string ,email : string, passWord: string) => {
  try {
    const response = await axios.get(API_URL)
    const user = response.data.find((user : any) => name === user.name && email === user.email && passWord === user.passWord )
    
    if(!user){
      console.log('Usuario nao encontrado')
      return
    }
    await axios.delete(`${API_URL}/${user.id}`);
    
  } catch (error) {
    console.error('Erro em excluir a conta', error)
  }
 }


