import React, { useState, useEffect } from 'react'
import BotaoVotacao from './BotaoVotacao'
import ListaOrdenada from './ListaOrdenada'

export type Citacao = {
  autor : string,
  texto : string,
  nota : number ,
  
}

function TextoCitacao() {
  const [notaSelecionada, setNotaSelecionada] = useState<number>(1)
  const [dadosComAvaliacao, setDadosComAvaliacao] = useState<Citacao[]>([])
  const [mensagem, setMensagem] = useState<string>('')

  const dados: Citacao[] =[
    {autor: 'Joao Pedro', texto: 'O mundo e cruel para aqueles que nao estao preparados', nota : 0}, 
    {autor: 'Renato', texto: 'Livre do mundo', nota : 0}, 
    {autor: 'Gabriel', texto: 'A maioreia e escravo pela propria natureza', nota : 0}, 
    {autor: 'Maria', texto: 'O mundo e feito pelos fortes', nota : 0}, 
    {autor: 'Carlos', texto: 'A paciência é a chave para grandes conquistas', nota: 0}, 
  {autor: 'Fernanda', texto: 'A vida recompensa quem não tem medo de arriscar', nota: 0}, 
  {autor: 'Leonardo', texto: 'Os fracos desistem antes de tentar', nota: 0},  
  ]
  const [indiceAtual,setIndiceAtual] = useState<number>(0)

  const proxima = () => {
    if(indiceAtual < dados.length -1){
      setIndiceAtual(indiceAnterior => indiceAnterior +1)
      setMensagem('Passe para proxima')
    }else{
      setMensagem('ACABOU --- ACABOU --- ACABOU')
    }
  }
 
  const handleClick = (valor : number) => {
    setNotaSelecionada(valor)

    setDadosComAvaliacao((prev) => { 
    const jaAvaliado = prev.find((event) => event.autor === dados[indiceAtual].autor )
   
    if(jaAvaliado){
      return prev.map((event) =>
      event.autor === dados[indiceAtual].autor ? {...event, nota: valor} : event)
    }else{
      return [
      ...prev , {
       autor : dados[indiceAtual].autor,
       texto : dados[indiceAtual].texto,
       nota : valor
      }
      ]
    }}
  )
   
  }
  useEffect (()=>{
    console.log(dadosComAvaliacao)
  }, [dadosComAvaliacao])

  return ( 
    <>
    <h3>{dados[indiceAtual].texto}</h3>
    <p>Nome do autor: {dados[indiceAtual].autor}</p>
    <br />
    <span style={{color : 'red', fontSize: '25px'}}>De uma nota para isso o/a {dados[indiceAtual].autor}</span>
    <br />
    <br />
    <BotaoVotacao onVoto={handleClick}/>
    <br />
    {mensagem && <p style={{color: 'yellow'}}>{mensagem}</p>}
    <br />
    <button onClick={proxima}>Proxima citacao</button>
    <ListaOrdenada dadosComAvaliacao={dadosComAvaliacao} />
    </>
  )
}


export default TextoCitacao

/*O que esse código faz?
Esse código exibe citações na tela e permite que o usuário atribua notas a elas. Cada vez que uma nota é dada, a citação é salva e o usuário pode passar para a próxima. No final, todas as citações avaliadas são exibidas em uma lista ordenada.

Explicação passo a passo
Definição do tipo Citacao:

Cada citação tem um autor, um texto e uma nota.

Estados do componente (useState)

notaSelecionada: Armazena a nota escolhida.

dadosComAvaliacao: Guarda as citações que já foram avaliadas.

mensagem: Exibe um aviso quando todas as citações foram avaliadas.

indiceAtual: Controla qual citação está sendo exibida no momento.

Função proxima()

Avança para a próxima citação.

Se todas as citações já foram exibidas, mostra a mensagem "ACABOU".

Função handleClick(valor)

Quando o usuário dá uma nota, essa nota é salva na lista dadosComAvaliacao.

Se a citação já foi avaliada, apenas atualiza a nota.

Se for a primeira vez, adiciona a citação à lista.

useEffect para depuração

Sempre que dadosComAvaliacao muda, exibe o estado no console.

Renderização no JSX

Exibe a citação atual e o nome do autor.

Exibe um botão para dar nota e avançar para a próxima citação.

Mostra a lista de citações avaliadas usando o componente ListaOrdenada.
 */
