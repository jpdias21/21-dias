import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
function FormBooks() {
  const valitador = Yup.object({
    
  })
  
  return (
    <>
    <Formik 
    initialValues={{Pessoa : {nome : '', cpf : '', email : '', telefone : ''} , Livro : {titulo : '', autor : '', editora : '', anoDePublicacao : ''} , Emprestimo : { data : '', hora : ''}}}
    validationSchema={valitador}
    onSubmit={async (values , {resetForm}) => {

    }}
    >
      <Form>
        <Field/>
        <ErrorMessage/>
      </Form>
    </Formik>
    </>
  )
}

export default FormBooks