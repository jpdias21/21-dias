import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { cadastroCarro } from '../../../services/userService.ts'
import { useState } from 'react'

function RegisterVehicle() {
    const [consfirmaRegistro, setConfirmaRegistro] = useState<boolean | null>(null)
 const validate = Yup.object({
    marca_carro : Yup.string()
        .required('Campo obrigatorio')
        .min(2, 'Muito curto')
        .max(25, 'Muito grande') ,
    modelo_carro : Yup.string()
        .required('Campo obrigatorio')
        .min(2, 'Muito curto')
        .max(25, 'Muito longo'),
    ano_carro : Yup.string()
        .required('Campo obrigatorio')
        .min(4)
        .max(4) ,
    cor : Yup.string()
        .required('Campo obrigatorio')
        .min(2)
        .max(20) ,
    estado_do_veiculo : Yup.string()
        .oneOf(['novo', 'semi-novo', 'usado'], 'Escolha entre as 3 opcoes')
        .required('O estado do veículo é obrigatório'),
    numero_de_portas : Yup.string()
        .required('campo obrigatorio')
        .max(2),
    quilometragem : Yup.string()
        .required('Campo obrigatorio')
        .max(10),
    valor_carro : Yup.string()
        .required('Campo obrigatorio')


    
 })  
return (
    <>
   <Formik  
  initialValues={{
    marca_carro: "",
    modelo_carro: "", 
    ano_carro: "", 
    cor: '', 
    estado_do_veiculo: '', 
    numero_de_portas: '',  
    quilometragem: "", 
    valor_carro: "" 
  }}
  validationSchema={validate}
  onSubmit={async (values, {resetForm}) => {

    try {
        await cadastroCarro(values)
        resetForm()
        setConfirmaRegistro(true)
    } catch (error) {
        console.error('Deu erro', error) 
        setConfirmaRegistro(false)
    }

  }}
>
  <Form>
    <h2>Faça o cadastro do veiculo</h2>
    
    <label>Marca do carro: </label>
    <Field name='marca_carro' placeholder='Digite a marca do carro' />
    <ErrorMessage name="marca_carro" component="div" className="error-message" />
    
    <br />        
    <label>Nome do carro: </label>
    <Field name='modelo_carro' placeholder='Digite a modelo do carro' />
    <ErrorMessage name="modelo_carro" component="div" className="error-message" />
    <br />
    
    <label>Ano de fabricaçao do carro: </label>
    <Field name='ano_carro' placeholder='Digite o ano do carro' />
    <ErrorMessage name="ano_carro" component="div" className="error-message" />
    <br />
    
    <label>Cor do seu carro:</label>
    <Field name='cor' placeholder='Digite a cor do carro'/>
    <ErrorMessage name="cor" component="div" className="error-message" />
    <br />
    
    <label>Estado do veiculo:</label>
    <Field as="select" name="estado_do_veiculo">
      <option value="">Selecione o estado</option>
      <option value="novo">Novo</option>
      <option value="semi-novo">Semi-novo</option>
      <option value="usado">Usado</option>
    </Field>
    <ErrorMessage name="estado_do_veiculo" component="div" className="error-message" />
    <br />
    
    <label>numero de portas:</label>
    <Field name='numero_de_portas' placeholder='Digite quantas portas tem no seu carro' />
    <ErrorMessage name="numero_de_portas" component="div" className="error-message" />
    <br />
    
    <label>Quilometragem:</label>
    <Field name="quilometragem" placeholder='Digite a quilometragem do seu carro' />
    <ErrorMessage name="quilometragem" component="div" className="error-message" />
    <br />
    
    <label>Valor do carro:</label>
    <Field name='valor_carro' placeholder='Digite o valor do seu carro' />
    <ErrorMessage name="valor_carro" component="div" className="error-message" />
    <br />
    
    <button type='submit'>Cadastrar</button>
  </Form>
</Formik>
  <br />
  {consfirmaRegistro !== null && (
  consfirmaRegistro 
    ? <p>Carro registrado com sucesso</p> 
    : <p>Erro em registrar o carro</p>
)}
    </>
  )
}

export default RegisterVehicle