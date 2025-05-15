import { useEffect } from "react"
import axios from "axios" 

export const useValidarCpf = (cpfUsuario : string | undefined, setCpfValido : boolean | null) => {
    useEffect(() => {
        if(cpfUsuario?.length !== 11) return
        const validar = () =>{
            try {
                const response = axios.get(`https://scpa-backend.saude.gov.br/public/scpa-usuario/validacao-cpf/${cpfUsuario}`)
                setCpfValido(response.data === true)
            } catch (error) {
                setCpfValido(false)
            }
        }
        
    }, [cpfUsuario, setCpfValido])
}