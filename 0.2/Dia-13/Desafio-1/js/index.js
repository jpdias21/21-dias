class Computador {
    tipo 
    processador
    video
    armazenamento
    memoriaRam
    ssd 
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }
    apresentar(){
        console.log(`Voce usa ${this.tipo}, com o precessador ${this.processador}, placa de video ${this.video}, armazenamento de ${this.armazenamento}, memeria ram de ${this.memoriaRam}, usa sdd ${this.ssd} `)
    }
}

let tipo = prompt('Qual o tipo que voce usa \n1.Desktop \n2.Notebook ')
if(tipo === '1'){
    tipo = 'Desktop'
}else if(tipo === '2'){
    tipo = 'Notebook'
}
let processador = prompt('Qual o tipo de processador voce usa :')
let video = prompt('Tipo de placa de video : Integral ou Dedicado')
let armazenamento = parseInt(prompt('Numero de GB me memoria: 64, 120, 240, 500, 100'))
let memoriaRam = parseInt(prompt('Quantos GB de memoria Ram : 4, 8, 16'))
let ssd = prompt('Tem ssd: \n1.Sim \n2.Nao')
if(ssd === '1'){
    ssd = 'Sim'
}else if(ssd === '2'){
    ssd = 'Nao'
}
let computador = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd)

computador.apresentar()
