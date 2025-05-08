import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function Formulario() {
  const validade = Yup.object({
    nomeProduto :  Yup.string()
    .min(1, 'muito curto')
    .max(30 , 'MUito Longo')
    .required('Preencha o campo') ,
    valorProduto : Yup.string()
    .test(
      'is-decimal',
      'Digite um valor válido (ex: 12,00)',
      value => {
        if (!value) return false;
        const valorNumerico = parseFloat(value.replace(',', '.'));
        return !isNaN(valorNumerico);
      }
    )
    .required('Preencha o campo') ,
    urlProduto: Yup.string()
    .required()
  })

  return (
    <>
    <Formik
    initialValues={{nomeProduto : '' , valorProduto : '', urlProduto : ''}}
    validadeSchema={validade}
    onSubmit={async (values, {resetForm}) => {
      try {
        const response = await axios.post('https://apigenerator.dronahq.com/api/Gj_CyWjL/data' , {
          nomeProduto : values.nomeProduto ,
          valorProduto : values.valorProduto ,
          urlProduto : values.urlProduto
        })
        console.log(response.data)
      } catch (error) {
        console.error('Deu erro', error)
      }
    }}
    >
      <Form>
        <label>Digite o nomeProduto do produto :  </label>
        <Field name='nomeProduto' />
        <ErrorMessage name='nomeProduto' component='div'/>
        <br />
        <label>Digite o valorProduto do produto :</label>
        <Field name='valorProduto' />
        <ErrorMessage name='valorProduto' component='div'/>
        <br />
        <label>Coloque a Url da imagem do produto </label>
        <Field name='urlProduto' />
        <ErrorMessage name='urlProduto' component='div'/>
        <br />
        <button type='submit'>Adicionar</button>
      </Form>
    </Formik>
    </>
  )
}

export default Formulario