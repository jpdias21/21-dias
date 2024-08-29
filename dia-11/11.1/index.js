let alunos = []
let notas = []
let condicao = true

do{
let nome = prompt('Digite o nome do aluno :')
let nota = parseInt(prompt('Digite a nota do aluno de 0 a 10'))
alunos.push(nome)
notas.push(nota)
let continuar = prompt('Voce deseja parar ou inserir mais : \n1.Continuar \n2. Parar')

let somaDasNotas = 0

if(continuar === '2'){
for(let i = 0 ; i < alunos.length ; i++){
    console.log('O Aluno : ' + alunos[i] + ' tirou ' + notas[i])
    somaDasNotas += notas[i]
}
let media = somaDasNotas / alunos.length
console.log('A media das notas dos alunos são :' + media)

console.log('Voce parou por aqui')
condicao = false
}
}while(condicao)

