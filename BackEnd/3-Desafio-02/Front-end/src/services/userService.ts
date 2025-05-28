import axios from 'axios'

const API = 'http://localhost:3000'

interface VeiculoData {
    marca_carro: string;
    modelo_carro: string;
    ano_carro: string;
    cor: string;
    estado_do_veiculo: string;
    numero_de_portas: string;
    quilometragem: string;
    valor_carro: string;
  }
  

export const cadastroCarro = async (dados : VeiculoData) => {
    const response = await axios.post(`${API}/cadastro`, dados)
    return response.data
}