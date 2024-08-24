let condicao = true

let alunosArray = []
let alunosNotaArray = []

while(condicao){

let nomeAlunos = prompt('Digite seu nome :')
let alunosNotas = parseInt(prompt('Digite o sua nota na prova de 0 a 10 :')) 

alunosArray.push(nomeAlunos)
alunosNotaArray.push(alunosNotas)

for(let i = 0 ; i < alunosArray.length ; i++){
    console.log('O aluno ' + alunosArray[i] + ' tirou ' + alunosNotaArray[i] + ' na prova')
}

let continuar = prompt('Voce deseja continuar \n1.Sim \n2.Não ')
if(continuar === '2'){
    let somaDasNotas = 0
    for(let i = 0 ; i < alunosNotaArray.length;  i ++ ){
        somaDasNotas += alunosNotaArray[i]
    }
    let mediaDasNotas = somaDasNotas / alunosArray.length 

    console.log('A media das notas dos alunos são ' + mediaDasNotas)
    console.log('Voce parou por aqui')
    condicao = false
}

}

//DESAFIO DIA #11:

//1 - Avaliação da turma

//1 - Crie um array para receber os nomes dos alunos e outro para receber as notas;


//2 - Para cada aluno inserido pergunte o nome e a nota da prova;


//3 - Seu usuário deve ter a opção de parar de inserir informações quando desejar;


//4 - No final exiba a nota de cada aluno, a soma das notas e a média geral da turma. Para calcular a média deve dividir a soma das notas pelo total de alunos.

