let numero = []

for(let i = 0 ; i <=10 ; i++){
    let obtendoNumero = parseInt(prompt('Isira algum numero'))
    numero.push(obtendoNumero)

    if(obtendoNumero < 0){
        console.log('Voce digitou um numero negativo')
    }
}
console.log('Voce digitou esses numeros ' + numero)