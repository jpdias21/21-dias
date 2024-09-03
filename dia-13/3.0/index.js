class Corrida{
    nome
    tipo
    distancia
    participantes
    vencedor
    constructor(nome, tipo, distancia, vencedor){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = participantes
        this.vencedor = vencedor
    }apresentar(){
        console.log("aaaaaa")
    }
}

let nomeLocal = prompt('Qual o nome da carrida :')
let tipoDeCorrida = prompt('Qual o tipo de corrida, Formula 1, Stock Car, Rally, etc;')
let distanciaDaCorrida = parseInt(prompt('Qual foi a distancia do percurso em metros :'))
let totalDeParticipantes = Number(prompt('Qual foi o total de participantes :'))
let participanteVencedor = prompt('Quem foi a equipe a vencedora :')
