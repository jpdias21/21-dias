class Carro{
    nome
    potencia
    velocidadeMaxima
    aceleracao
    distancia
    constructor(nome, potencia, velocidadeMaxima,aceleracao, distancia){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
        this.distancia = distancia
    }
    apresentar(){
        console.log(`Nome da sua equipe ${this.nome}, cavalos de potencia de ${this.potencia} a velocidade maxima de ${this.velocidadeMaxima} quilometros por hora, com distancia e metros em ${this.distancia} `)
    }
}


let nome = prompt('Qual o nome da equipe ')
let potencia = parseInt(prompt('Quantos cavalos tem seu carro'))
let velocidadeMaxima = parseInt(prompt('Qual a velocidade maxima que seu carro pode alcançar'))
let aceleracao = parseInt(prompt('O tempo de segundos que o carro leva para ir de 0 a 100km/h')) 


let distancia = 100

let resultado = distancia / (velocidadeMaxima / aceleracao)

let carro = new Carro(nome, potencia, velocidadeMaxima, aceleracao, resultado.toFixed(2))

carro.apresentar()


// // Classe Carro
// class Carro {
//     constructor(nome, potencia, velocidadeMaxima, aceleracao) {
//         this.nome = nome; // Nome da equipe do carro
//         this.potencia = potencia; // Potência do carro em cavalos
//         this.velocidadeMaxima = velocidadeMaxima; // Velocidade máxima em km/h
//         this.aceleracao = aceleracao; // Tempo para ir de 0 a 100km/h em segundos
//     }
    
//     // Método que calcula o tempo necessário para percorrer uma distância
//     calcularTempo(distancia) {
//         return distancia / (this.velocidadeMaxima / this.aceleracao);
//     }
    
//     // Método para apresentar o carro
//     apresentar() {
//         console.log(`Equipe: ${this.nome}, Potência: ${this.potencia}HP, Velocidade Máxima: ${this.velocidadeMaxima}km/h, Aceleração 0-100km/h: ${this.aceleracao}s`);
//     }
// }

// // Classe Corrida
// class Corrida {
//     constructor(nome, tipo, distancia) {
//         this.nome = nome; // Nome da corrida
//         this.tipo = tipo; // Tipo de corrida (F1, Rally, etc.)
//         this.distancia = distancia; // Distância total da corrida
//         this.participantes = []; // Lista de carros participantes
//         this.vencedor = null; // Nome da equipe vencedora
//     }
    
//     // Método para adicionar um carro à corrida
//     adicionarCarro(carro) {
//         this.participantes.push(carro);
//     }
    
//     // Método para determinar o vencedor (carro que fez o menor tempo)
//     determinarVencedor() {
//         if (this.participantes.length === 0) {
//             console.log("Nenhum carro na corrida!");
//             return;
//         }
        
//         let menorTempo = Infinity;
//         let vencedor = null;
        
//         for (let carro of this.participantes) {
//             let tempo = carro.calcularTempo(this.distancia);
//             if (tempo < menorTempo) {
//                 menorTempo = tempo;
//                 vencedor = carro.nome;
//             }
//         }
        
//         this.vencedor = vencedor;
//     }
    
//     // Método para exibir o vencedor
//     exibirVencedor() {
//         if (this.vencedor) {
//             console.log(`O vencedor da corrida foi a equipe: ${this.vencedor}!`);
//         } else {
//             console.log("O vencedor ainda não foi determinado.");
//         }
//     }
// }

// // Criando um objeto da classe Corrida
// let corrida = new Corrida("Interlagos", "Fórmula 1", 5000);

// // Criando alguns carros
// let carro1 = new Carro("Mercedes", 1000, 350, 2.8);
// let carro2 = new Carro("Ferrari", 980, 340, 3.0);
// let carro3 = new Carro("Red Bull", 990, 345, 2.9);

// // Adicionando os carros à corrida
// corrida.adicionarCarro(carro1);
// corrida.adicionarCarro(carro2);
// corrida.adicionarCarro(carro3);

// // Determinando e exibindo o vencedor
// corrida.determinarVencedor();
// corrida.exibirVencedor();
