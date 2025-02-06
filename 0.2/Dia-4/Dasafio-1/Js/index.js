let fome = prompt('Voce esta com fome ? Digite 1.Sim 2.Nao')
let dinheiro = prompt('Voce tem dinheiro ? Digite 1.Sim 2.Nao')
let restauranteAberto = prompt('O restaurante esta aberto ? Digite 1.Sim 2.Nao')

if(fome === '2' || dinheiro === '2'){
    console.log('Hoje a janta sera em casa')
}else if(fome === '1' && dinheiro === '1' && restauranteAberto === '2'){
    console.log('Peça um delivery')
}else if(fome === '1' && dinheiro === '1' && restauranteAberto === '1'){
    console.log('Hoje o jantar sera no seu restaurante preferido')
}