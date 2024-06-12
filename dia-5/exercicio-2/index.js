let opcao = Number(prompt("Escolha uma opção:\n1. abastecer com gasolina \n2. abastacer com alcool \n3. calibrar os pneus"))

switch(opcao){
    case 1 : 
let valorGasolina = Number(prompt("5 Reais o litro, vai querer abastecer quantos reais "))  

let valorLitroGasolina = valorGasolina / 5

    console.log(`voce abasteceu ${valorLitroGasolina} de litros`)
        break
    case 2 : 
let valorAcool = Number(prompt("3 Reais o litro, vai querer abastecer quantos reais "))

let valorLitroAlcool = valorAcool / 3
    console.log(`voce abasteceu ${valorLitroAlcool} litros`)
        break
    case 3 : 
    console.log("Pneus calibrados com sucesso")
        break

    default :
    console.log("Deu algo errado kkkk")
        break
}