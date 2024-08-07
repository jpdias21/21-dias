let tabuada = Number(prompt('Digite um numero'))
for(let num1 = tabuada ; num1 <= tabuada + 2 ; num1 ++){
    console.log('Numero de entreda : ' + num1)
        for(let num2 = 0 ; num2 <= 10 ; num2 ++){
            console.log(tabuada + ' x ' + num2 + ' = ' + (tabuada * num2))
        }
}