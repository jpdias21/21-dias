class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    
    constructor(tipo, processador, video, armazenamento,  memoriaRam,  ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
        
    } 
    apresentar(){
        console.log('O meu setup e :' + this.tipo + ' o processador :' + this.processador + ' placa de video :' + this.video +' Armazenamento : ' + this.armazenamento + ' memoria :' + this.memoriaRam + ' O SSD :' + this.sdd
        )
    }
}
let oComputador = []
condicao = true
let indexComputadores = 0
while(condicao){
    let tipoSetup = prompt('Digite qual o seu notebok ou desktop :')
    let tipoProcessaor = prompt('Digite qual o seu processador :')
    let tipoVideo = prompt('Digite seu tipo de Integrador ou dedicado :')
    let tipoArmazenamento = prompt('insira o numero de armazenamento :')
    let tipoMemoriaRam = prompt('insira o numeor de GB de memoria :')
    let tipoSdd = prompt('insira o tamanha do seu SSD:')
    let novoComputador = new Computador(tipoSetup , tipoProcessaor , tipoVideo , tipoArmazenamento, tipoMemoriaRam, tipoSdd)
    oComputador.push(novoComputador)

    let continuar = prompt('Voce deseja inserir novos : \n1. Sim \n2.Não')
    if(continuar === '2'){
        console.log('Voce escolheu parar por aqui')
        condicao = false
    }
}