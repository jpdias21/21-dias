import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


function FormBooks() {
  

  const valitador = Yup.object({
    pessoa : Yup.object({
      nome : Yup.string() .required('Campo Obrigatorio') .min(2, 'Muito curto'),
      cpf : Yup.string().required('Campo obrigatorio') ,
      email : Yup.string() .email('Email Invalido') . required('Campo obrigatorio'), 
      telefone : Yup.string() .min(11, 'Digite o numero certo') . required('Campo obrigatorio') , 
    }) ,
    livro : Yup.object({
      titulo : Yup.string() .required('Campo obrigatorio') , 
      autor : Yup.string() .required('Campo obrigatorio'), 
      editora : Yup.string() .required('Campo obrigatorio'), 
      anoPublicacao : Yup.string() .required('Campo obrigatorio') .max(4, 'digite o ano com exemplo: 1998')
    }), 
    emprestimo : Yup.object({
      dataHora : Yup.string() . required('Campo obrigatorio')
    })
  })
  
  return (
    <>
    <Formik 
    initialValues={{
      pessoa: {
        nome: '',
        cpf: '',
        email: '',
        telefone: ''
      },
      livro: {
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: ''
      },
      emprestimo: {
        dataHora: '' 
      }
    }}
    validationSchema={valitador}
    onSubmit={async (value , {resetForm}) => {
      
      try {
        const response = await axios.post("https://apigenerator.dronahq.com/api/9K6nFLh5/data", value )
        console.log(response.data)
        resetForm()
      } catch (error) {
        console.error(error)
      }
    }}
    >
      <Form>
        <label>Digite seu nome : </label>
        <Field name="pessoa.nome" placeholder='Digite seu nome' />
        <ErrorMessage name='pessoa.nome' component="div"/>
        <br />

        <label>Digite seu Cpf :  </label>
        <Field
        name="pessoa.cpf"
        placeholder="Digite seu CPF" />
        <ErrorMessage name='pessoa.cpf' component="div"/>
        <br />

        <label>Digite seu Email : </label>
        <Field name="pessoa.email" placeholder='Digite seu nome' />
        <ErrorMessage name='pessoa.email' component="div"/>
        <br />

        <label>Digite seu Telefone : </label>
        <Field name="pessoa.telefone" placeholder='Digite seu telefone' />
        <ErrorMessage name='pessoa.telefone' component="div"/>
        <br />    

        <label>O nome do Livro : </label>
        <Field name="livro.titulo" placeholder='Digite o nome do livro' />
        <ErrorMessage name='livro.titulo' component="div"/>
        <br />

        <label>O nome do Autor : </label>
        <Field name="livro.autor" placeholder='Digite o nome do autor' />
        <ErrorMessage name='livro.autor' component="div"/>
        <br />

        <label>O nome da Editora : </label>
        <Field name="livro.editora" placeholder='digite o nome do editora' />
        <ErrorMessage name='livro.editora' component="div"/>
        <br />

        <label>Ano de publicacao: </label>
        <Field name="livro.anoPublicacao" placeholder='Digite o ano de publicaoao ' />
        <ErrorMessage name='livro.anoPublicacao' component="div"/>
        <br />
        <label>Data do Empréstimo:</label>
        <Field name="emprestimo.dataHora" placeholder="Digite a data e hora" />
        <ErrorMessage name="emprestimo.dataHora" component="div" />
        <br />

        <button type='submit' >Enviar</button>
      </Form>
    </Formik>
    </>
  )
}

export default FormBooks