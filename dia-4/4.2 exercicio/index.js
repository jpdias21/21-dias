let nome = prompt("insira seu nome")
let idade = Number(prompt("insira sua idade"))
let carta = prompt("Voce possui carte de motorista")
let carro = prompt("Voce possui carro")

if( idade <18 || carta === "nao"){
    console.log(`${nome}, voce não pode dirigir`)
}else if(idade > 18 && carta === "sim" && carro === "nao"){
    console.log(`${nome}, voce pode dirigir mais não tem carro`)
}else if(idade > 18 && carta === "sim" && carro === "sim"){
    console.log(`${nome}, voce sera o motorista`)
}