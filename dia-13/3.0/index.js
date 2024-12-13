class Corrida{
    nome
    tipo
    distancia
    carro
    Tempo
    participantes
    vencedor
    constructor( nome, tipo, distancia, carro, menorTempo, participantes, vencedor ){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.carro = carro
        this.Tempo = menorTempo
        this.participantes = participantes
        this.vencedor = vencedor
    }apresentar(){
        console.log("Nome da corrida : " + this.nome +', tipo de corrida : ' + this.tipo + ', com a distancia de : ' + this.distancia + ' metros com o seu carro : ' + this.carro + ' no tempo de ' + this.Tempo + ' segundos e com o total de particiántes : ' + this.participantes + ', o vencedor  e ' + this.vencedor )
    }
}

let condicao = true
let indexContagem = 0 
let tempoDaCorrida = []
let carro = []
let informacoes = []
while(condicao){
let nomeLocal = prompt('Qual o nome da carrida :')
let tipoDeCorrida = prompt('Qual o tipo de corrida, Formula 1, Stock Car, Rally, etc;')
let distanciaDaCorrida = parseInt(prompt('Qual foi a distancia do percurso em metros :'))
let qualCarro = prompt('Qual e o seu carro :')
let tempoCorrida = parseInt(prompt('Qual foi o tempo de distancia percorrido, em segundos :'))
let totalDeParticipantes = Number(prompt('Qual foi o total de participantes :'))
let participanteVencedor = prompt('Quem foi a equipe a vencedora :')

let aCorrida = new Corrida(nomeLocal, tipoDeCorrida, distanciaDaCorrida, qualCarro, tempoCorrida, totalDeParticipantes,participanteVencedor)
tempoDaCorrida.push(tempoCorrida)
carro.push(qualCarro)
informacoes.push(aCorrida)
aCorrida.apresentar()

for(let i = 0 ; i < carro.length ; i++){
    let menorTempo = (tempoCorrida / distanciaDaCorrida)
    console.log('o menor tempo :' + menorTempo) 
}
let continuar = prompt('Voce deseja insirir mais informações  \n1.Sim \n2.Não')
if(continuar === '1'){
    indexContagem++
}else if(continuar === '2'){
    console.log('voce escolheu parar por aqui')

    condicao = false
}

}//while termina aqui , fiz errado o certo e este 

// // Definindo a classe Corrida
// class Corrida{
//     // Propriedades da classe Corrida
//     Nome // Nome do local da corrida
//     Tipo // Tipo da corrida (Fórmula 1, Stock Car, Rally, etc.)
//     Distancia // Distância total da corrida em metros
//     Vencedor // Vencedor da corrida
//     Participantes // Array de objetos da classe Carro

//     // Construtor da classe Corrida
//     constructor(nome, tipo, distancia){
//         this.Nome = nome // Atribuindo o nome da corrida
//         this.Tipo = tipo // Atribuindo o tipo da corrida
//         this.Distancia = distancia // Atribuindo a distância da corrida
//         this.Vencedor = "" // Inicializando o vencedor como uma string vazia
//         this.Participantes = [] // Inicializando o array de participantes
//     }

//     // Método para definir o vencedor da corrida
//     DefinirVencedor(){
//         let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia) // Calculando o tempo do primeiro participante
//         let vencedor = this.Participantes[0] // Inicializando o vencedor como o primeiro participante

//         // Loop para verificar o menor tempo entre os participantes
//         for (let index = 1; index < this.Participantes.length; index++) {
//             let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia) // Calculando o tempo dos outros participantes
//             if (tempo < menorTempo) { // Se o tempo for menor que o menorTempo atual
//                 menorTempo = tempo // Atualiza o menorTempo
//                 vencedor = this.Participantes[index] // Atualiza o vencedor
//             }
//         }

//         return this.Vencedor = vencedor // Define o vencedor da corrida
//     }

//     // Método para exibir o vencedor da corrida
//     ExibirVencedor(){
//         alert("O vencedor é: " + this.Vencedor.Nome) // Exibe um alerta com o nome do vencedor
//     }
// }

// // Definindo a classe Carro
// class Carro {
//     // Propriedades da classe Carro
//     Nome // Nome da equipe do carro
//     Potencia // Potência do carro
//     VelocidadeMaxima // Velocidade máxima do carro
//     Aceleracao // Aceleração do carro

//     // Construtor da classe Carro
//     constructor(nome, potencia, velocidadeMaxima, aceleracao) {
//         this.Nome = nome // Atribuindo o nome do carro
//         this.Potencia = potencia // Atribuindo a potência do carro
//         this.VelocidadeMaxima = velocidadeMaxima // Atribuindo a velocidade máxima do carro
//         this.Aceleracao = aceleracao // Atribuindo a aceleração do carro
//     }

//     // Método para calcular o tempo médio de corrida
//     CalcularTempoMedio(distancia) {
//         let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao) // Calcula o tempo médio baseado na distância, velocidade e aceleração
//         return resultado // Retorna o resultado do cálculo
//     }
// }
