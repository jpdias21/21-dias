// let nome = prompt('Digite sue nome:')
// let salario = parseInt(prompt('Digite o valor do seu salario:'))



// function reajuste(salario){
//     if(salario < 1500){
//         let novoSalario = salario * 1.20
//         console.log(`Seu novo salario e ${novoSalario.toFixed(2)}`)
//     }else if(salario > 1501 && salario < 2000){
//         let novoSalario = salario * 1.15
//         console.log(`Seu novo salario e ${novoSalario.toFixed(2)}`)
//     }else if(salario > 2001 && salario < 3000){
//         let novoSalario = salario * 1.10
//         console.log(`Seu novo salario e ${novoSalario.toFixed(2)}`)
//     }else if(salario > 3001){
//         let novoSalario = salario * 0.20
//         console.log(`Seu novo salario e ${novoSalario.toFixed(2)}`)
//     }

// }

function solicitarInformacoes() {
    let nomeProduto = prompt("Digite o nome do produto:");
    let precoProduto = parseFloat(prompt("Digite o preço do produto:"));

    let desconto = calcularDesconto(precoProduto);
    calcularPrecoFinal(nomeProduto, precoProduto, desconto);
}

function calcularDesconto(preco) {
    if (preco <= 100) {
        return 10;  // 10% de desconto
    } else if (preco > 100 && preco <= 500) {
        return 7;   // 7% de desconto
    } else if (preco > 500 && preco <= 1000) {
        return 5;   // 5% de desconto
    } else {
        return 3;   // 3% de desconto
    }
}

function calcularPrecoFinal(nome, preco, desconto) {
    let valorDesconto = (preco * desconto) / 100;
    let precoFinal = preco - valorDesconto;

    console.log(`O produto "${nome}" tinha o preço de R$${preco.toFixed(2)}`);
    console.log(`Com um desconto de ${desconto}%, o valor final é R$${precoFinal.toFixed(2)}`);
}

// Chamando a função principal
solicitarInformacoes();
