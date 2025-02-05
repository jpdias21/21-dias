function Calc(distancia , parametro){
    if(distancia < 0){
        return 'Parametro errado, voce deve colocar um  numero positivo'
    }else if(parametro === 'gasolina'){
        parametro = 16
        let calculoGasolina = distancia / parametro
       let mostrar = calculoGasolina
       console.log(Math.ceil(mostrar))
        return Math.ceil(calculoGasolina)

    }else if(parametro === 'alcool'){
        parametro = 11
        let calculoAlcool = distancia / parametro
        let mostrar = calculoAlcool
        console.log(Math.ceil(mostrar))
        return Math.ceil(calculoAlcool)
    }else if(parametro !== "gasolina" && parametro !== 'alcool'){
        return 'Parametro errado, digite o nome certo'
    }
//
    }/// termina aqui

module.exports = {Calc}