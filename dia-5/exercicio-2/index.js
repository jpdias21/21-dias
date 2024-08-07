let abastacer = prompt('Escolha das quais opcoes voce irá fazer \n 1.Gosolina \n 2.Alcool \n 3. Calibrar pneus')
let litroGasolina = 5
let litroAlcool = 3

switch (abastacer){
    case '1' :
        let abastecerGasolina = Number(prompt('Qual o valor que voce vai abastecer de gasolina'))
        console.log('Voce colocou '+ (abastecerGasolina / litroGasolina) + ' litros de gasolina')
            break
    case '2' :
        let abastecerAlcool = Number(prompt('Qual o valor que voce vai abastecer da Alcool'))
        console.log('Voce colocou '+ (abastecerAlcool / litroAlcool) + ' litros de alcool')
        break
    case '3' :
        console.log('pneus calibrados com sucesso')    
        break
    default :
        console.log('Deu algo de errado')
    break
}