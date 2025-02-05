let arrayA = [1, 2, 3, 4,5 ,6 ,7 ,8 ,9 ,10]

let arrayB = [11, 12, 13, 14, 15, 16 ,17,18, 19,20]

let arrayRecebido = []

let arrayIgual = []

function implementacao(pergunta){

    for(let i = 0 ; i < 10 ; i++){
        pergunta = parseInt(prompt('Digite algum numero :'))
        arrayRecebido.push(pergunta)

        if(arrayA.includes(pergunta) || arrayB.includes(pergunta)){
         arrayIgual.push(pergunta)   
        }
        
    }


}
implementacao()

console.log(arrayRecebido)

console.log(arrayIgual)