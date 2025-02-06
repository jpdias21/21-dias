let opcao = prompt('Escolha entre estas opçoes : \n1. Gasolina\n2. Álcool\n3. Calibrar o pneu')
 
let valorGasolina = 5
let valorAlcool = 3

switch(opcao){
    case '1':
        let abastecerGasolina = Number(prompt('Digite o valor que voce quer abastecer :'))
        let valorAbastecidoGasolina = abastecerGasolina / valorGasolina
        console.log(`Voce colocou ${valorAbastecidoGasolina} litros de gasolina.`)
        break
    case '2':
        let abastecerAlcool = Number(prompt('Digite o valor que voce quer abastecer:'))
        let valorAbastecidoAlcool = abastecerAlcool / valorAlcool
        console.log(`voce colocou ${valorAbastecidoAlcool} litros de alcool`)
        break
    case '3':
        console.log('Pneus calibrados com sucesso. ')
        break
    default :
    console.log('Algo de errado alconteceu')
    break
}