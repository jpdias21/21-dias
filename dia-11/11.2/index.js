let condicao = true
let carro = []
let valor = []
let ano = []
do{
let nomeCarro = prompt('Digite o nome do carro :')
let valorCarro = parseInt(prompt('Digite o valor do carro :'))
let anoCarro = Number(prompt('Digite o ano do carro :'))

carro.push(nomeCarro)
valor.push(valorCarro.toFixed(2))
ano.push(anoCarro)

let continuar = prompt('Voce quer inserir um novo carro, digite : \n1.Sim \n2.Não')
if(continuar === '2'){
    console.log('Voce escolheu parar por aqui')

    for(let i =0 ; i < carro.length ; i++){
        console.log(carro[i] + ', ' + ano[i] + ' Valor: ' + valor[i])
    }

// Ordene seus vetores pelo preço dos carros. (Aqui você deve usar seu algoritmo de ordenação, não use os nativos do javascript, como o OrderBy)
// Ex:[prisma,celta,porsche] [2015,2020,2022] [70.000,50.000,300.000] -> 
//-> [celta,prisma,porsche] [2020,2015,2022] [50.000,70.000,300.000]
//AINDA AINDA AINDA


 condicao = false
}
}while(condicao)

