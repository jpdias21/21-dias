class Computador {
    tipo;
    processador;
    video;
    armazenamento;
    memoriaRam;
    ssd;
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }
    apresentar(){
        console.log('Eu uso : ' + this.tipo + ', o processador : ' + this.processador + ', a placa de video : ' + this.video + ', armazenamento de: ' + this.armazenamento + ', memororia ram :' + this.memoriaRam + ', e ssd :' + this.ssd)
    }
} 

let condicao = true
let oComputador = []
let indexComputador = 0
while(condicao){
let tipoTipo = prompt('Desktop ou computador :')
let tipoProcessador = prompt('Qual o seu tipo de processador')
let tipoVideo = prompt('Qual a sua placa de video')
let tipoArmazenamento = prompt('o quanto de de armazenamento')
let tipoMemororia = prompt('O quanto de memoria ram ')
let tipoSsd = prompt('Tem ssd :')

let computador = new Computador (tipoTipo, tipoProcessador, tipoVideo, tipoArmazenamento, tipoMemororia, tipoSsd)
oComputador.push(computador)
computador.apresentar()

let continuar = prompt('Se voce deseja inserir mais informações: \n1.Sim \n2.Não ')
if(continuar === '2'){
    console.log('Voce escolheu parar por aqui')
    condicao = false
}else(
    indexComputador++
)


}
