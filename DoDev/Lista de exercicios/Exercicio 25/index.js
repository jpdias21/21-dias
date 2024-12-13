class Carro{
    Marca
    Modelo
    Categoria
    Ano 
    Quilometragem
    Valor
    constructor(Marca,Modelo,Categoria,Ano,Quilometragem,Valor){
        this.Marca = Marca
        this.Modelo =Modelo
        this.Categoria = Categoria
        this.Ano = Ano
        this.Quilometragem = Quilometragem
        this.Valor = Valor
    }
}

async function MostrarCarros(){ 
   await fetch("https://apigenerator.dronahq.com/api/mMMVCAP-/carros")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err)) 
    
}

///---------
async function PostarCarro(url = '', data ={}){
    let response = await fetch(url , {
    method : "POST",
    mode : 'cors',
    cache : 'no-cache',
    credentials : 'same-origin',
    headers : {
        'Content-Type' : 'application/json'
    }, 
    redirect : 'follow',
    referrerPolicy : 'no-referrer',
    body: JSON.stringify(data)
 })
 return response.json()
}
async function EnviarDadosCarros() {
    let marca = prompt('Digite a marca do carro :')
    let modelo = prompt('Digite o modelo do carro :')
    let categoria = prompt('Digete a categoria. carro ou moto')
    let ano = parseInt(prompt('Digite o ano do carro'))
    let quilometragem = parseInt(prompt('Digite quantos quilometros seu carro ja rodou'))
    let valor = parseInt(prompt('Digite o valor do seu carro'))

    console.log('Enviando os dados do carro(s)')
    await PostarCarro('https://apigenerator.dronahq.com/api/mMMVCAP-/carros',
        {
            Marca : marca,
            Modelo : modelo,
            Categoria : categoria,
            Ano : ano,
            Quilometragem : quilometragem,
            Valor : valor,
            
        }).then((data) => 
            {console.log(data)
        }).catch((error) => console.error('Error' , error))    
        console.log('Acabou')
}

///---------------------
async function PutCarros(url ='' , data = {}){
    let response = await fetch(url , {
        method : 'PUT',
        mode : 'cors',
        cache : 'no-cache',
        credentials :'same-origin',
        headers: {
            'Content-Type' : 'application/json'
        },
        redirect : 'follow',
        referrerPolicy : 'no-referrer',
        body : JSON.stringify(data)
    })
    return response.json()
}
async function PutCarrosAtualizar(){
    let marca = prompt('Digite a marca do carro :')
    let modelo = prompt('Digite o modelo do carro :')
    let categoria = prompt('Digete a categoria. carro ou moto')
    let ano = parseInt(prompt('Digite o ano do carro'))
    let quilometragem = parseInt(prompt('Digite quantos quilometros seu carro ja rodou'))
    let valor = parseInt(prompt('Digite o valor do seu carro'))
    let id = prompt('digite o id do carro')
    console.log('Atualizado')
    await PutCarros(`https://apigenerator.dronahq.com/api/mMMVCAP-/carros/${id}`, {
        "Marca": marca,
        "Modelo": modelo,
        "Categoria": categoria,
        "Ano": ano,
        "Quilometragem": quilometragem,
        "Valor": valor,
        
      }).then((data) => {console.log(data)

      }).catch((error) => console.error('O erro', error))
      console.log('Acabou')
}
 //---------

async function DeletCarros(url ='', data = {}){
    let response = await fetch(url , {
        method : 'DELETE',
        mode : 'cors',
        cache : 'no-cache' ,
        credentials : 'same-origin',
        headers: {
            'Content-Type' : 'application/json'
        },
        redirect : 'follow' ,
        referrerPolicy : 'no-referrer',
        body: JSON.stringify(data)
    })
    return response.json()
}

async function DeletarCarros(id){
  await  DeletCarros(`https://apigenerator.dronahq.com/api/mMMVCAP-/carros/${id}` , {
        
    }).then((data) => console.log(data)
).catch((error) => console.error('Erro : ', error))
}
////---

async function AcharPeloId(url ='', ){
   let response = await fetch(url , {
    method : 'GET',
    mode : 'cors',
    cache : 'no-cache',
    credentials : 'same-origin',
    headers : {
        'Content-Type' : 'application/json'
    },
    redirect: 'follow',
    referrerPolicy : 'no-referrer',
    
   })
   return response.json()
}

async function carroPeloId(id){
    AcharPeloId(`https://apigenerator.dronahq.com/api/mMMVCAP-/carros/${id}`, {
        
    }).then((data) => {
        console.log(data)
    }).catch((error) => { console.error('erro' , error) }
)
}


///----
let continuar = true
do{
let questao = prompt('Escolha: \n1.Mostrar \n2.Enviar Dados. \n3.Atualizar Dados. \n4. Deletar Carro \n5.Procurar pelo id \n6.Encerrar')
switch (questao) {
    case '1':
        MostrarCarros()
        break;
    case '2':
        EnviarDadosCarros()
        break
    case '3':
        PutCarrosAtualizar()
        break
    case '4':
        DeletarCarros(parseInt(prompt('Digite o id')))
        break
    case '5':
        carroPeloId(parseInt(prompt('Digite o id')))
    break
    case '6':
        console.log('Voce escoclheu parar por aqui')
        continuar = false
    default:
        break;
}
}while(continuar)