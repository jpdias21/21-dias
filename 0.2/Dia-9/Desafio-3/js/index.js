let continuar = true
anoAtual = 2025

while(continuar){
    let nome = prompt('Digite seu nome')
    let idade = parseInt(prompt('Digite sua idade :'))
    let salario = parseFloat(prompt('Digite seu salario:'))
    console.log(`Nome : ${nome}`)
    console.log(`Idade: ${idade}`)
    console.log(`Salario ${salario}`)

    let opcao = prompt('As sua informacoes estao correta \n1.Sim \n2.Nao')
    if(opcao === '1'){
        for(let i =0 ; i <= 60 ; i++){
            let aumento = salario * 0.15
            salario += aumento
            console.log(`O aumento do seu salario por ano ${anoAtual + i} : ${salario.toFixed(2)}`)
        }

        continuar = false
    }else if(opcao === '2'){
        
    }
}