let fome =  prompt("Você esta com fome")
let dinheiro = prompt("Voce tem dinheiro")
let restaurante = prompt("o restaurante esta aberto")

if( fome === "nao" || fome === "nao"){
    console.log("Hoje a janta sera e casa")
}else if(fome === "sim" && dinheiro === "sim" && restaurante === "nao"){
    console.log("Peça um delivery")
}else if(fome === "sim" && dinheiro === "sim" && restaurante === "sim"){
    console.log("Hoje o jantar sera no seu restaurante favorito")
}