//CAÇA BUGS - CONDICIONAIS

let iniciar = prompt("Deseja iniciar o programa? s/n")

if (iniciar == "n") {
    alert("Programa encerrado!")
}else if(iniciar != 's' && iniciar != 'n'){
    console.log('Voce digitou errado')
} else {
    alert("Programa iniciado!")
    let opcao = prompt("Escolha uma ação a ser feita -> 1 - Mensagem motivacional; 2 - Mensagem desmotivacional; 3 - nada")
    switch (opcao) {
        case '2':
            alert("Você NÃO VAI conseguir, desista!")
            break
        case '1':
            alert("Continue tentando, você VAI conseguir!")
            break
        case '3':
            alert("Opção inválida selecione um número de 1 a 3.")
            break
        default:
            alert("Algo de errado aconteceu")
            break
    }
}