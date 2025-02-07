let array = []

let fibonacci = parseInt(prompt('Digite um numero :'))

array[0]= fibonacci -1

array[1]= fibonacci

for( let i =2 ; i< 10; i++){
    array[i] =  array[ i - 2 ] + array[i -1]
}
console.log(array)

/*
  📌 Este programa cria uma sequência de Fibonacci dentro de um array.

  🧐 O que é a sequência de Fibonacci?
  - É uma lista de números onde cada número (a partir do terceiro) 
    é a soma dos dois anteriores.
  - Por exemplo, se começarmos com 7 e 8:
      - O terceiro número será 7 + 8 = 15;
      - O quarto número será 8 + 15 = 23;
      - E assim por diante.

  ✅ Como o programa funciona?
  1️⃣ Pede ao usuário para digitar um número.
  2️⃣ O primeiro número da sequência será o número digitado - 1.
  3️⃣ O segundo número será o próprio número digitado.
  4️⃣ Os próximos números serão a soma dos dois anteriores.
  5️⃣ O programa cria um total de 10 números na sequência.


// Criamos um array vazio para armazenar os números da sequência
let array = [];

// Pede ao usuário para digitar um número (convertendo para número inteiro)
let fibonacci = parseInt(prompt('Digite um número:'));

// O primeiro número da sequência é o número digitado - 1
array[0] = fibonacci - 1;

// O segundo número da sequência é o próprio número digitado
array[1] = fibonacci;

// Usamos um loop para preencher o restante da sequência
for (let i = 2; i < 10; i++) { // Começamos do índice 2 até chegar em 10 posições
    // Cada novo número da sequência é a soma dos dois anteriores
    array[i] = array[i - 2] + array[i - 1];
}

// Mostra a sequência de Fibonacci no console
console.log(array);
*/