let continuar = true
let arrayHotel = []
let arrayReserva = []
let idDoHotel = 1
let idDaReserva = 1

class Hotel{
    constructor(IdHotel, Nome, Categoria, Endereco, Telefone){
        this.IdHotel = IdHotel
        this.Nome = Nome
        this.Categoria = Categoria
        this.Endereco = Endereco
        this.Telefone = Telefone

    } 
}
class Reserva{
    constructor(IdDaReserva, IdHotel, NomeDoresponsavel, diaEntrada, diaSaida ){
        this.IdDaReserva = IdDaReserva
        this.IdHotel = IdHotel
        this.NomeDoresponsavel = NomeDoresponsavel
        this.diaEntrada = diaEntrada
        this.diaSaida = diaSaida
    }
}


function cadastro(cadastroHotel){
    let categoriaDosHoteis = true
    let nomeDoHotel = prompt('Digite o nome do hotel :')
    let categoriaDoHotel 
    do{
        categoriaDoHotel = parseInt(prompt('Digite qual a categoria do hotel : \n1.Extrela \n2.Extrelas \n3.Estrelas \n4.Estrelas \n5.Extrelas'))
        if(categoriaDoHotel > 5 || categoriaDoHotel === 0){
            console.log('Digite apenas entre 1 e 5')
        }else{
            categoriaDosHoteis = false
        }
    }while(categoriaDosHoteis)
    let enderecoDoHotel = prompt('Digite o endereço do hotel :')
    let telefoneDoHotel = parseInt(prompt('Digite o telefone do hotel'))
    cadastroHotel = new Hotel(idDoHotel,nomeDoHotel, categoriaDoHotel, enderecoDoHotel, telefoneDoHotel)
    
    arrayHotel.push(cadastroHotel)
}

function cadastroReserva(reserva){
    let idDaReserva = 1
    let idDoHotel = 1
    let nomeDoresponsavel = prompt('Digite o nome do responsavel :')
    let diaDeEntradaMaiorQueSaida = true
    let diaEntrada, diaSaida
    do{
    diaEntrada = parseInt(prompt('Digite seu dia de entrada :'))
    diaSaida = parseInt(prompt('Digite seu dia de saida :'))
    if(diaEntrada > diaSaida){
        console.log('Voce esta colocando seu dia entrada maior que seu dia de')
    }else{
        diaDeEntradaMaiorQueSaida = false
    }
    }while(diaDeEntradaMaiorQueSaida)
    
    reserva = new Reserva(idDaReserva,idDoHotel,nomeDoresponsavel, diaEntrada, diaSaida )
    arrayReserva.push(reserva)

}

function ProcuraReservaPeloHotel(idDoHotel) {
    arrayReserva.forEach(reserva => {
        if(reserva.IdHotel === idDoHotel){
            let hotel = arrayHotel.find(h => h.IdHotel === idDoHotel)
            if(hotel){
                console.log(`Nome do hotel : ${hotel.Nome} `)
                console.log(`Nome do responsavel : ${reserva.NomeDoresponsavel}`)
                console.log(`Dia de entreda : ${reserva.diaEntrada}`)
                console.log(`Dia de saide : ${reserva.diaSaida}`)
            }else{
                console.log('Não tem nenhum hotel com este ID')
            }
        }
    }
)
}

function ProcurarReservaPeloId(idDeUmaReserva) {
    let reservaEncontrada = arrayReserva.find(r => r.IdDaReserva === idDeUmaReserva)
    if(reservaEncontrada){
        let hotelEncontrado = arrayHotel.find(h => h.IdHotel === reservaEncontrada.IdHotel)
        if(hotelEncontrado){
            console.log(`Nome do hotel : ${hotelEncontrado.Nome}`)
            console.log(`Endereço : ${hotelEncontrado.Endereco}`)
        }else{
            console.log('Hotel não encontrado')
        }
        console.log(`Dia de entreda: ${reservaEncontrada.diaEntrada}`)
        console.log(`Dia de saida : ${reservaEncontrada.diaSaida}`)
    }else{
        console.log(`O id da sua reserva não foi encontrado, digite novamente.`)
    }
    
}
//////====
function ProcurarReservaPeloNome(nomeDoCliente) {
    let nomeEncontrado = arrayReserva.find(n => n.NomeDoresponsavel === nomeDoCliente)
    if(nomeEncontrado){
        let hotelEncontrado = arrayHotel.find(h => h.IdHotel === nomeEncontrado.IdHotel)
        if(hotelEncontrado){
            console.log(`Hotel: ${hotelEncontrado.Nome}`)
            console.log(`Endereço : ${hotelEncontrado.Endereco}` )
        }else{
            console.log(`Hotel não encontrado`)
        }
        console.log(`Dia de entrada : ${nomeEncontrado.diaEntrada}`)
        console.log(`Dia de saida : ${nomeEncontrado.diaSaida}`)

    }else{
    console.log('Voce digitou o nome errado')
    }
    
}

//////==== 
do{
    let opcao = prompt('Escolha o opcâo que voce deseja: \n1.Cadastrar Hotel. \n2.Cadastrar Reserva \n3.Todas as reservas do Hotel \n4.Ver a minha reserva \n5.Ver minha reserva pelo nome \n6.Atulizar Telefone \n7. Encerrar')

    switch(opcao){
        case '1' :
         cadastro()
         break
        
        case '2' :
            cadastroReserva()
            break

        case '3':
            ProcuraReservaPeloHotel(parseInt(prompt('Digite o id do Hotel :')))
            break
        case '4':
            ProcurarReservaPeloId(parseInt(prompt('Digite seu Id de reserva:')))
            break
        case '5' :
            ProcurarReservaPeloNome(prompt('Digite seu nome para acharmos sua reserva'))
            break
        case '7' :
            console.log('Voce escolheu parar por aqui')
            console.log(arrayHotel)
            console.log(arrayReserva)
            
            continuar = false
            break

    }
}while(continuar)