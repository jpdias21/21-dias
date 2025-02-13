class Carro{
    nome
    potencia
    velocidadeMaxima
    aceleracao
    resultado

    constructor(nome, potencia, velocidadeMaxima, aceleracao, resultado){
        this.nome = nome
        this.potencia= potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
        this.resultado = resultado
    }apresentar(){
        console.log('Nome da equipe do carro:' + this.nome + ", potencia do carro :" + this.potencia + ', velocidade :' + this.velocidadeMaxima + ', e a aceleração maxima e :' + this.aceleracao + ', o resuldado e :' + this.resultado)
    }
}
let condicao = true
let indexEquipes = 0
let informacaoes = []

while(condicao){
let nomeEquipe = prompt('Qual o nome da sua equipe :')
let potenciaCarrro = parseInt(prompt('Número de cavalos de potência do carro :'))
let velocidade = parseInt(prompt('Qual a maior velocidade que o carro pode alcançar :'))
let carroAceleracao = parseInt(prompt('O tempo em segundos que o carro leva de 0 a 100km/h :'))
let calculo = potenciaCarrro /(velocidade / carroAceleracao)
let carro = new Carro (nomeEquipe, potenciaCarrro, velocidade, carroAceleracao, calculo)
informacaoes.push(carro)
carro.apresentar()

console.log(calculo)

let continuar = prompt('Voce deseja inserir novas informações : \n1.Sim \n2.Não')
if(continuar === '2'){
    console.log('Voce decidiu terminar por aqui.')
    condicao = false
}else{
    indexEquipes++
}

}///while

