import { useState } from "react"


export default function useContador(){
  const [contador, setContador] = useState(0)

  function aumentar(){
    setContador(contador + 1)
  }

  function diminuir(){
    setContador(contador - 1)
  }

  return {contador, aumentar, diminuir}

}