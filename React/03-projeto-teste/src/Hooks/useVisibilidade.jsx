import { useState } from "react"


export default function useVisibilidade(){
    const [visivel, setVisivel] = useState(true)

    function alterarVisibilidade(){
        setVisivel(!visivel)
    }

    return{visivel, alterarVisibilidade}


}