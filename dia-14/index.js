

function colaborador(nome, salario){
nome = prompt('Qual e o seu nome:')
salario = parseInt(prompt('Qual o seu salario :'))

    function aumentoSalarial(salario){
        if(salario <= 1500){
            console.log(`o ${nome}, colaborador, o salario de ${salario}, a 20% de aumento e o reajustado e : ${salario * 1.20}`)
        }else if(salario > 1501 || salario <= 2000){
            console.log(`o ${nome}, colaborador, o salario de ${salario}, a 15% de aumento e o reajustado e : ${salario * 1.15}`)
        }else if(salario > 2001 || salario <= 3000 ){
            console.log(`o ${nome}, colaborador, o salario de ${salario}, a 10% de aumento e o reajustado e : ${salario * 1.10}`)
        }else if(salario > 3001){
            console.log(`o ${nome}, colaborador, o salario de ${salario}, a 5% de aumento e o reajustado e : ${salario * 1.05}`)
        }
    }
    aumentoSalarial(salario)

    function novasInformacoes(condicao,continuar,indexUsuarios){
        indexUsuarios = 0
        condicao = true
        continuar = prompt('Se voce deseja inserir novas informações: \n1.Sim \n2.Não')
        if(continuar === '1'){
            indexUsuarios++
            colaborador()
        }else if(continuar === '2'){
            console.log('voce escolheu parar por aqui')
            condicao = false
        }
    
    }
    novasInformacoes()
}
colaborador()

