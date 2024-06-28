let opcao = prompt('Escolha entre as 3 opções \n1. Gasolina \n2. Alcool \n3. Calibrar os pneus')


switch(opcao){
    case '1' :
        let galosina = Number(prompt('5 Reais o valor da gasolina, vai querer abastecer quantos reais'))
        let litroGalosina = galosina / 5
            console.log('Voce abasteceu ' + litroGalosina + 'litros')
                break
     case '2' :
        let alcool = Number(prompt('3 reias o valor do Acool, qual a quantidade de litros que voce quer abastecer'))
        let litroAlcool =  alcool / 3   
            console.log('Voce abasteceu ' + litroAlcool + " litros")
                break
     case '3' :
            console.log('Pneus calibrados com sucesso')
                break
    default:
            console.log('Deu Algo errado tente novamente')
                break
            

}
