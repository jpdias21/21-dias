let continuar = true
let arrayHotel = []
let arrayReserva = []



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
    let idDoHotel = parseInt(prompt('Digite o id do Hotel :'))
    let enderecoDoHotel = prompt('Digite o endereço do hotel :')
    let telefoneDoHotel = parseInt(prompt('Digite o telefone do hotel'))
    cadastroHotel = new Hotel(idDoHotel,nomeDoHotel, categoriaDoHotel, enderecoDoHotel, telefoneDoHotel)
    
    arrayHotel.push(cadastroHotel)
}

function cadastroReserva(reserva){
    let idDaReserva = parseInt(prompt('Digite um id para sua reserva :'))
    let idDoHotel = parseInt(prompt('Digite o id do Hotel:'))
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

function ProcurarHoteisPelacategoria(categoriarr) {
    
    let filtro = arrayHotel.filter((categoria) => categoria.Categoria === categoriarr)
    
   filtro.forEach(filtro => {
    console.log(`Nome do Hotel : ${filtro.Nome}`)
    console.log(`Endereço: ${filtro.Endereco}`)
    console.log(`Categoria ${filtro.Categoria}`)
   })
    
    
}

////aqui
function MudarTelefoneDoHotel(id , telefone){
    let idDoHotelEncontrado = arrayHotel.find(i => i.IdHotel === id)
   if(idDoHotelEncontrado){
     
    idDoHotelEncontrado.Telefone = telefone
   }else{
    console.log('Id do hotel não encontrado')
   }
}
    
////aqui
do{
    let opcao = prompt('Escolha o opcâo que voce deseja: \n1.Cadastrar Hotel. \n2.Cadastrar Reserva \n3.Todas as reservas do Hotel \n4.Ver a minha reserva \n5.Ver minha reserva pelo nome \n6.Procurar Hotel pela categoria \n7.Mudar telefone \n8. Encerrar')

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
        case '6' :
            ProcurarHoteisPelacategoria(parseInt(prompt('Digite qual categoria de hotel voce esta procurando : \n1.Extrela \n2.Extrelas \n3.Estrelas \n4.Estrelas \n5.Extrelas ')))
            break
        case '7' :
            let idDoHotel = parseInt(prompt('Digite o id do hotel'))
            let mudarTelefone = parseInt(prompt('Digite o numero de telefone'))
            MudarTelefoneDoHotel(idDoHotel, mudarTelefone)
            break
        case '8' :
            console.log('Voce escolheu parar por aqui')
            console.log(arrayHotel)
            console.log(arrayReserva)
            
            continuar = false
            break

    }
}while(continuar)
    
// Claro! Vamos analisar o seu código, explicando cada parte, os conceitos utilizados e como tudo está funcionando. Vou dividir a explicação em seções para facilitar a compreensão.

// Estruturas de Dados

// Arrays
// - **`arrayHotel`** e **`arrayReserva`** são **arrays** que armazenam objetos do tipo `Hotel` e `Reserva`, respectivamente. Um array é uma lista que pode conter múltiplos valores ou objetos, permitindo armazenar e manipular dados relacionados.

// Classes
// - **`class Hotel`**: Define uma estrutura para criar objetos de hotel. Cada objeto de hotel possui atributos como `IdHotel`, `Nome`, `Categoria`, `Endereco` e `Telefone`.
// - **`class Reserva`**: Semelhante à classe `Hotel`, mas é usada para criar objetos de reserva, contendo atributos como `IdDaReserva`, `IdHotel`, `NomeDoresponsavel`, `diaEntrada` e `diaSaida`.

// Funções
// #### 1. Cadastro de Hotéis
// - **`cadastro(cadastroHotel)`**: Esta função é responsável por coletar informações do usuário sobre um hotel (nome, categoria, ID, endereço, telefone) e criar um novo objeto do tipo `Hotel`, que é adicionado ao `arrayHotel`.
//   - **`prompt()`**: Usado para solicitar informações do usuário.
//   - **`do...while`**: Garante que a categoria do hotel esteja entre 1 e 5. Ele continua perguntando até receber uma entrada válida.
  
// #### 2. Cadastro de Reservas
// - **`cadastroReserva(reserva)`**: Coleta informações do usuário para criar uma nova reserva, incluindo o ID da reserva, ID do hotel, nome do responsável e as datas de entrada e saída. Essa nova reserva é adicionada ao `arrayReserva`.
//   - **Validação de Datas**: Um `do...while` é usado novamente para garantir que a data de entrada não seja maior que a data de saída.

// ### Funções de Busca
// #### 3. Procura Reserva Pelo Hotel
// - **`ProcuraReservaPeloHotel(idDoHotel)`**: Busca todas as reservas associadas a um hotel com base em seu ID. Para cada reserva encontrada, ele utiliza `find()` para localizar o hotel correspondente e exibe as informações.
//   - **`forEach()`**: Itera sobre cada reserva no `arrayReserva`.
//   - **`find()`**: Localiza um hotel específico no `arrayHotel` que corresponde ao `IdHotel` da reserva.

// #### 4. Procurar Reserva Pelo ID
// - **`ProcurarReservaPeloId(idDeUmaReserva)`**: Busca uma reserva específica pelo seu ID. Se a reserva é encontrada, o hotel correspondente também é procurado e suas informações são exibidas.
//   - A função lida com casos em que a reserva ou o hotel não é encontrado.

// #### 5. Procurar Reserva Pelo Nome
// - **`ProcurarReservaPeloNome(nomeDoCliente)`**: Busca uma reserva pelo nome do responsável. Se encontrada, procura o hotel associado e exibe suas informações.
//   - Utiliza o método `find()` para localizar a reserva pelo nome.

// #### 6. Procurar Hotéis Pela Categoria
// - **`ProcurarHoteisPelacategoria(categoriarr)`**: Filtra os hotéis no `arrayHotel` com base na categoria fornecida. 
//   - **`filter()`**: Cria um novo array com os hotéis que correspondem à categoria selecionada.
//   - **`forEach()`**: Exibe as informações dos hotéis filtrados.

// ### Mudança de Telefone
// #### 7. Mudar Telefone Do Hotel
// - **`MudarTelefoneDoHotel(id, telefone)`**: Esta função busca um hotel pelo seu ID e atualiza o número de telefone se o hotel for encontrado.
//   - **`find()`**: Utilizado para localizar o hotel com o `IdHotel` especificado.
//   - A lógica é simples: se o hotel existe, o telefone é atualizado; se não, uma mensagem é exibida.

// ### Loop Principal
// - **`do...while(continuar)`**: Este loop mantém o programa em execução, permitindo que o usuário escolha diferentes opções até decidir encerrar. 
//   - **`switch`**: Utilizado para gerenciar as opções do menu, chamando as funções apropriadas de acordo com a escolha do usuário.

// ### Conclusão
// Todo o código é estruturado para coletar informações sobre hotéis e reservas, armazená-las em arrays e permitir que os usuários realizem operações como cadastro, busca e atualização de dados. Cada parte do código utiliza conceitos fundamentais de programação, como classes, funções, arrays e métodos de manipulação, o que permite uma gestão eficiente das informações no sistema. 

// ### Resumo
// - **Classes** definem a estrutura de dados.
// - **Arrays** armazenam os dados.
// - **Funções** manipulam os dados (cadastrar, buscar, atualizar).
// - **`find()`, `forEach()`, `filter()`** são métodos úteis para trabalhar com arrays.
