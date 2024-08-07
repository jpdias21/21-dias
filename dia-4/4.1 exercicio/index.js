let fome = prompt('Voce esta com fome ')
let dinheiro = prompt('Voce tem dinheiro')
let restaurante = prompt('O restaurantes esta aberto')

if(fome === 'nao' || dinheiro === 'nao'){
    console.log('hoje a janta sera em casa')
}else if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'nao'){
    console.log('Peça um delivery')
}else if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'sim')(
    console.log( 'Hoje a janta sera no seu restaurante preferido')
)