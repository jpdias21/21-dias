let recebe = []

for(let i = 0; i < 10 ; i++){
    let numeros = Number(prompt('Digite um numero'))
    recebe.push(numeros)
    
    if(numeros <=  0){
        console.log('Voce digitou numero negativo')
    }
}