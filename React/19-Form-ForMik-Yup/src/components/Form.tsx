// Formulario.tsx
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
const validation = Yup.object({
  nome : Yup.string().required('Nome Obrigatorio'), 
  email : Yup.string().email('Email Obrigatorio').required('email Obrigatorio'),
  phone : Yup.string().matches(/^\d{2}\s9\d{4}-\d{4}$/, 'Telefone inválido. Ex: 11 91234-1234').required('Numero obrigatorio'),
  passWord : Yup.string().min(8, 'No minino 8 caracteries').required('senha obrigatoria')

})

const Formulario = () => {
  return (
    <Formik 
    initialValues={{name : '' , email : '' , phone : '',  passWord : ''}}
    validadeSchema={validation}
    onSubmit={async (values,{resetForm}) => {
      try {
        const response = await axios.post('https://apigenerator.dronahq.com/api/fOUDQtRX/data', values)
        console.log('respose', response.data)
        resetForm()
      } catch (error) {
        console.error('erro', error)
      }
    }}
    >
      
      <Form>
        <label> Nome : </label>
        <Field name="name" placeholder='Digite seu nome'/>
        <ErrorMessage name='name'  component='div' />
        <br />
        <label> Email : </label>
        <Field name="email" type='email'  placeholder='Digite seu nome' />
        <ErrorMessage name='email' component='div' />
        <br />
        <label>Phone :</label>
        <Field name='phone' placeholder='Digite seu numero' />
        <br />
        <label>PassWorld : </label>
        <Field name='passWord' placeholder='Digite sua senha' />
        <ErrorMessage name='passWord' component='div' />
        <br />
        <br />
        <button type='submit'>Enviar</button>
      </Form>

    </Formik>
  )
}

export default Formulario
