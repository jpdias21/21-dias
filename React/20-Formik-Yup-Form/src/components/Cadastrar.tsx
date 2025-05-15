
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useEffect, useState } from 'react';

interface Values{
    nome: string;
    sobrenome: string;
    email: string;
    telefone: string;
    senha: string;
    cpf: string

}

function Cadastrar() {
    const [cadastroRealizado,setCadastroRealizado] = useState<boolean>(false)
    const [mostrarSenha, setMostrarSenha] = useState<boolean>(false)
    const [cpfUsuario, setCpfUsuario] = useState<string>()
    const [cpfValido, setCpfValido ] = useState<null | boolean>(null)
   
    const verificar = (cpf : string) => {
      try {
        const response = axios.get(`https://scpa-backend.saude.gov.br/public/scpa-usuario/validacao-cpf/${cpf}`)
        setCpfValido(response.data === true)
    } catch (error) {
        setCpfValido(false)
    }
    }


    const valitaion = Yup.object({
        nome : Yup.string()
        .min(2,'Nome muito curto')
        .max(50, 'Muito longo')
        .required('Este campo e obrigatorio'), 
        sobrenome : Yup.string()
        .min(2, 'Muito curto')
        .max(50, 'Muito longo')
        .required('Campo obrigatorio'),
        email : Yup.string()
        .email('Email invalido')
        .required('Campo Obrigatorio'),
        telefone : Yup.string()
        .matches(/^\d{10,11}$/, 'Telefone deve ter 10 ou 11 dígitos')
        .required('Numero obrigatorio'),
        senha : Yup.string()
        .min(6,'Senha muito curta')
        .required('Campo Obrigatorio') ,
        cpf :  Yup.string()
        .length(11, 'apenas 11 numeros')
        .required('Compo obrigatorio')

      })

  return (
    <>
      <Formik
      initialValues={{nome : '', sobrenome: '', email : '', telefone : '',senha : '', cpf : '' , }}
      validationSchema={valitaion}
      onSubmit={async (values: Values, {resetForm}) => {
        if(cpfValido !== true){
          alert('Cpf invalido')
          return
        }
        try {
          const response = await axios.post("https://apigenerator.dronahq.com/api/fOUDQtRX/data", values)
          console.log('response', response.data)
          resetForm() 
          setCadastroRealizado(true)
        } catch (error) {
          console.error('Erro', error)
        }
      }}
      >
        <Form>      
          <label>Nome: </label>
          <Field name='nome' placeholder='Digite seu nome' />
          <ErrorMessage name='nome' component='div'/>
          <br />
          <label>Sobre nome : </label>
          <Field name='sobrenome' placeholder='Digite seu sobrenome'/>
          <ErrorMessage name='sobrenome' component='div'/>
          <br />
          <label>CPF : </label>
          <Field name='cpf' placeholder='CPF apenas numero' onBlur={(event :any) => verificar(event)} />
          {cpfValido === true && <div style={{ color: 'green' }}>CPF válido ✅</div>}
          {cpfValido === false && <div style={{ color: 'red' }}>CPF inválido ❌</div>}
          <ErrorMessage name='cpf' component='div'/>
          <br />
          <label>Email : </label>
          <Field name='email' type='email' placeholder='Digite seu email' />
          <ErrorMessage name='email' component='div'/>
          <br />
          <label>Telefone : </label>
          <Field name='telefone' placeholder='Digite seu telefone' />
          <ErrorMessage name='telefone' component='div'/>
          <br />
          <label>Senha : </label>
          <Field name='senha' type={mostrarSenha ? 'text' : 'password'} placeholder='Digite uma senha' />
          <ErrorMessage name='senha' component='div'/>
          <button onClick={() => setMostrarSenha(!mostrarSenha)} type='button'>Mostrar senha</button>
          <br />
          <br />
          <button type='submit'>Cadastrar</button>
        </Form>
      </Formik>
      <br />
      {cadastroRealizado ? <p>Cadastro realizado com sucesso</p> : ''}
    </>
  )
}

export default Cadastrar