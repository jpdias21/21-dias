import {Header,Footer} from '../Atoms'
import FormularioMensagem from "../Molecules/FormularMensagem"
import './templates.css'
export default function TemplateFormulario(){

    return(
        <>
        <div className='templatesFormulario'>
        <Header/>
        <main>
        <FormularioMensagem/>
        </main>
        <Footer/>
        </div>
        </>
    )
}