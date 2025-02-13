let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

let arrayQuestao= []
for(let i = 0 ; i <= 10 ; i++){
    let questao = parseInt(prompt('Digite o numero que voce acha que esta nos array'))
    arrayQuestao.push(questao)
}
console.log(arrayQuestao)

let filtro = arrayQuestao.filter(elemento =>  arrayA.includes(elemento) || arrayB.includes(elemento))

console.log(filtro)

let filtroSemRepeticao = [... new Set(filtro)]

console.log(filtroSemRepeticao)

// Vamos explicar o que está acontecendo nesse código de uma forma bem simples, para que você possa entender e colocar no seu VSCode para ler e estudar. 😊

// O que é esse código?
// Esse código faz duas coisas:

// Filtra elementos de um array (arrayQuestao) com base em dois outros arrays (arrayA e arrayB).

// Remove elementos repetidos do resultado filtrado.

// Vamos detalhar cada parte:

// Parte 1: O filtro
// javascript
// Copy
// let filtro = arrayQuestao.filter(elemento => arrayA.includes(elemento) || arrayB.includes(elemento));
// O que está acontecendo aqui?
// arrayQuestao: É o array principal, onde estão os elementos que você quer filtrar.

// arrayA e arrayB: São dois arrays que contêm os valores que você quer usar como critério de filtro.

// filter(): É um método que cria um novo array com os elementos que passam em um teste.

// includes(): É um método que verifica se um valor existe em um array.

// O que esse código faz?
// Ele percorre cada elemento de arrayQuestao.

// Para cada elemento, ele verifica se esse elemento existe em arrayA ou em arrayB (usando o operador ||).

// Se o elemento existir em arrayA ou arrayB, ele é incluído no novo array filtro.

// Exemplo prático:
// Suponha que:

// arrayQuestao = [1, 2, 3, 4, 5]

// arrayA = [2, 4]

// arrayB = [5, 6]

// O código vai:

// Verificar se 1 está em arrayA ou arrayB → não está → descarta.

// Verificar se 2 está em arrayA ou arrayB → está em arrayA → inclui no filtro.

// Verificar se 3 está em arrayA ou arrayB → não está → descarta.

// Verificar se 4 está em arrayA ou arrayB → está em arrayA → inclui no filtro.

// Verificar se 5 está em arrayA ou arrayB → está em arrayB → inclui no filtro.

// Resultado do filtro:

// javascript
// Copy
// [2, 4, 5]
// Parte 2: Removendo repetições
// javascript
// Copy
// let filtroSemRepeticao = [...new Set(filtro)];
// O que está acontecendo aqui?
// Set: É uma estrutura de dados que só permite valores únicos. Se você passar um array para ele, ele automaticamente remove os valores repetidos.

// [...new Set(filtro)]: Aqui, estamos criando um Set a partir do array filtro e depois convertendo ele de volta para um array usando o operador de espalhamento (...).

// O que esse código faz?
// Ele pega o array filtro (que pode ter elementos repetidos) e remove as repetições, criando um novo array filtroSemRepeticao.

// Exemplo prático:
// Suponha que o filtro seja:

// javascript
// Copy
// [2, 4, 5, 2, 5]
// O código vai:

// Criar um Set a partir desse array → Set só permite valores únicos, então ele remove as repetições.

// Converter o Set de volta para um array.

// Resultado do filtroSemRepeticao:

// javascript
// Copy
// [2, 4, 5]
// Resumo do que o código faz:
// Filtra elementos:

// Cria um novo array (filtro) com os elementos de arrayQuestao que existem em arrayA ou arrayB.

// Remove repetições:

// Cria um novo array (filtroSemRepeticao) a partir do filtro, removendo os elementos repetidos.

// Exemplo completo:
// Suponha que:

// javascript
// Copy
// let arrayQuestao = [1, 2, 3, 4, 5, 2, 5];
// let arrayA = [2, 4];
// let arrayB = [5, 6];
// O código:

// javascript
// Copy
// let filtro = arrayQuestao.filter(elemento => arrayA.includes(elemento) || arrayB.includes(elemento));
// console.log(filtro); // [2, 4, 5, 2, 5]

// let filtroSemRepeticao = [...new Set(filtro)];
// console.log(filtroSemRepeticao); // [2, 4, 5]
// Quando usar isso?
// Esse código é útil quando você precisa:

// Filtrar elementos de um array com base em critérios de outros arrays.

// Garantir que o resultado final não tenha elementos repetidos.

// Por exemplo:

// Filtrar uma lista de produtos que estão em promoção (arrayA) ou em estoque (arrayB).

// Remover duplicatas de uma lista de números ou strings.

// Agora você já sabe o que esse código faz e como ele funciona! 😊