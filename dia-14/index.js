function colaborador(nome, salario){
    nome = prompt('Qual e o seu nome:')
    salario = parseInt(prompt('Qual o seu salario :'))
    
    function aumentoSalarial(salario){
        if(salario < 1500){
            console.log(`O seu salario de ${salario.toFixod(2)}, o aumento de : ${salario * 20%} 20%`)
        }else if(salario > 1501 || salario < 2000){
            console.log(`O seu salario ${salario.toFixod(2)}, o aumento e de : 15%`)
        }else if(salario > 2001 || salario < 3000 ){
            console.log(`O seu salario ${salario.toFixod(2)}, o aumento e de : 10%`)
        }else if(salario > 3000){
            console.log(`O seu salario ${salario.toFixod(2)}, o aumento e de : 5%`)
        }
    }
    aumentoSalarial(salario)
}