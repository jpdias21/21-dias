let continuar = true
arrayReservas = []
arrayHoteis = []

class Hotel {
    constructor(IdHotel, Nome, Categoria, Endereco, Telefone){
        this.IdHotel = IdHotel
        this.Nome = Nome
        this.Categoria = Categoria
        this.Endereco = Endereco
        this.Telefone = Telefone
    } 
}

class Reserva{
    constructor(Id, IdDoHotel, NomeDoResponsavel, DiaDeEntrada, DiaDeSaida ){
        this.Id = Id
        this.IdDoHotel = IdDoHotel
        this.NomeDoResponsavel = NomeDoResponsavel
        this.DiaDeEntrada = DiaDeEntrada
        this.DiaDeSaida = DiaDeSaida

    }
}

function CadastrarHoteis(cadastro) {
    let idDiferente = true
    let categotiaHotelpassou = true
    let idDoHotel 
    do{
        idDoHotel = parseInt(prompt('Digite um Id para cadastrar o Hotel :'))
        let IdIgual = arrayHoteis.find(i => i.IdHotel === idDoHotel)
        if(IdIgual){
            console.log('Voce esta tentando colocar um id que ja tem em um hotel, por favor coloque/insira outro Id')
        }else{
            idDiferente = false
        }
    }while(idDiferente)
    let nomeDoHotel = prompt('Digite o nome do hotel:')
    let categoriaDoHotel 
    do{
        categoriaDoHotel = prompt('Digite o numero da categoria do hotel \n1.Extrela \n2.Extrelas \n3.Estrelas \n4.Extrelas \n5.Extrelas')
        if(categoriaDoHotel < 1 || categoriaDoHotel > 5){
            console.log('Digite um numero entre 1 a 5')
        }else{
            categotiaHotelpassou = false
        }
    }while(categotiaHotelpassou)
    let enderecoDoHotel = prompt('Digite o endereço do hotel:')
    let telefoneDoHotel = parseInt(prompt('Digite o telefone do hotel :'))
    cadastro = new Hotel (idDoHotel, nomeDoHotel, categoriaDoHotel,enderecoDoHotel,telefoneDoHotel)
    arrayHoteis.push(cadastro)
    

}

function CadastrarReserva(cadastroReserva){

    let idUsuarioPassou = true
    let idUsuario
    do{
        idUsuario = parseInt(prompt('Digite um Id/numero para cadastrar, para te identidicar:'))
        let idIgualUsuario = arrayReservas.find(r => r.Id === idUsuario)
        if(idIgualUsuario){
            console.log('Este id ja existe, por favor crie outra numeração de id')
        }else{
            idUsuarioPassou = false
        }
    }while(idUsuarioPassou)
    let idDoHotelPassou = true
    let idDoHotelReserva 
    do{
        idDoHotelReserva = parseInt(prompt('Digite o Id do hotel que voce quer ficar hospetado :'))
        let idDoHotelIgual = arrayHoteis.find(h => h.IdDoHotel === idDoHotelReserva)
        if(idDoHotelIgual){
           console.log('Não existe nenhum hotel com este id, se deseja sair digite "s".')
        }else{
            idDoHotelPassou = false
        }
    }while(idDoHotelPassou)
    let nomeDoResponsalvelDaReserva = prompt('Digite o nome do responsavel da reserva :')
    let diaPassou = true
    let diaDeEntrada , diaDeSaida
    do{
        diaDeEntrada = parseInt(prompt('Digite o seu dia de entrada :'))
        diaDeSaida = parseInt(prompt('Digite os seu dia de saida :'))
        if(diaDeEntrada > diaDeSaida){
            console.log('Voce esta colocando seu dia de entrada maior que o dia de saida')
        }else if(diaDeEntrada > 31 || diaDeSaida > 31){
            console.log('Voce esta tentando colocar mais do que o dia 31, mais não tem mais que 31 no mes.')
        }else{
            diaPassou = false
        }
    }while(diaPassou)
    
    cadastroReserva = new Reserva (idUsuario , idDoHotelReserva, nomeDoResponsalvelDaReserva, diaDeEntrada, diaDeSaida)
    arrayReservas.push(cadastroReserva)

}



function ReservasDoHotelPeloId(acharReservasPaloIdDoHotel){
  
    arrayReservas.forEach(reserva => {
        if(reserva.IdDoHotel === acharReservasPaloIdDoHotel){
            let hotelEncontrado = arrayHoteis.find(h => h.IdHotel === acharReservasPaloIdDoHotel)
            if(hotelEncontrado){
                console.log(`Nome do hotel : ${hotelEncontrado.Nome}`)
                console.log(`Endereço: ${hotelEncontrado.Endereco}`)
                console.log(`Nome do responsavel : ${reserva.NomeDoResponsavel}`)
                console.log(`Dia de entrada : ${reserva.DiaDeEntrada}`)
                console.log(`Dia de saida : ${reserva.DiaDeSaida}`)
            }else{
                console.log('Não tem nenhum hotel com este Id')
            }
        }
        
    });

}

function ReservaPeloNome(nomeDaPessoa){
    let nomeEncontrado = arrayReservas.find(n => n.NomeDoResponsavel === nomeDaPessoa)
    if(nomeEncontrado){
        let hotelEncontrado = arrayHoteis.find(h => h.IdHotel === nomeEncontrado.IdDoHotel)
        if(hotelEncontrado){
            console.log(`Nome do hotel : ${hotelEncontrado.Nome}`)
            console.log(`Endereço: ${hotelEncontrado.Endereco}`)
            console.log(`Nome do responsavel : ${nomeEncontrado.NomeDoResponsavel}`)
            console.log(`Dia de entrada : ${nomeEncontrado.DiaDeEntrada}`)
            console.log(`Dia de saida : ${nomeEncontrado.DiaDeSaida}`)}
        
    }else{
        console.log('Este nome não foi encontrado.')
    }
}


function AcharHoteisPelaCategoria(hotelPelaCategoria){
    
    
    let filtro = arrayHoteis.filter((c) => parseInt(c.Categoria) === hotelPelaCategoria)
   
        filtro.forEach(hotel => {
            console.log(`Nome do hotel : ${hotel.Nome}`) 
            console.log(`Endereço do hotel : : ${hotel.Endereco}`)
        }
        )
}
  
function AtualizarTelefone(idDoHotel){
    let hotelEncontrado = arrayHoteis.find(h => h.IdHotel === idDoHotel)
    if(hotelEncontrado){
        let atualizarNumero = parseInt(prompt('Digite o numero para atualizar :'))
        hotelEncontrado.Telefone = atualizarNumero
    }else{
        console.log('Id do hotel não encontrado ')
    }
}

do{
    let asQuestoes = prompt('\n1.Cadastrar Hotel \n2.Cadastrar reserva \n3.Ver reservas pelo id do hotel \n4.Achar reserva pelo nome \n5.Achar hoteis pela categoria. \n6.Atualizar telefone \n7.Encerrar ' )
    switch (asQuestoes) {
        case '1':
            CadastrarHoteis()
            break;
        
        case '2':
            CadastrarReserva()
            break

        
        case '3':
            ReservasDoHotelPeloId(parseInt(prompt('Digite o Id do hotel :')))
            break
        case '4' :
            ReservaPeloNome(prompt('Digite o nome da reserva :'))
            break
        case '5':
            
             AcharHoteisPelaCategoria(parseInt(prompt(`Digite a categoria do hotel : \n1.extrela \n2.Extrelas \n3.Extrelas \n4.Extrelas \n5.Extrelas`)))
            break
        case '6':
            AtualizarTelefone(parseInt(prompt('Digite o id do hotel')))
            break
        case '7':
            console.log(arrayHoteis)
            console.log(arrayReservas)
            console.log('Voce escolheu parar por aqui')
            continuar = false
            break
        default:
            break;
    }
    
}while(continuar)