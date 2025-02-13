let arrayNomes = []
let notas =[]

let continuar = true

while(continuar){
    let cadastrarAluno = prompt('Voce deseja cadastra algum aluno : \n1.Sim \n2.Nao')
    if(cadastrarAluno === '1'){
        let nomeAluno = prompt('Digite o nome do aluno:')
        arrayNomes.push(nomeAluno)
        
        let notaAluno = Number(prompt('Digite a nota do aluno:'))
        if(notaAluno> 10){
            console.log('Voce esta colocando um numero maior que 10')
        }else{
            notas.push(notaAluno)
        }
    }else if(cadastrarAluno === '2'){
        continuar = false
    }
}

console.log(arrayNomes)
console.log(notas)

for(let i = 0 ; i < arrayNomes.length; i++){
    console.log(`O aluno ${arrayNomes[i]} tirou ${notas[i]}`)
}

let somaDasNotas = notas.reduce((acumulador , nota) => acumulador + nota, 0 )
console.log(`A soma das notas de todos os alunos e ${somaDasNotas}`)

let mediaNotas = somaDasNotas / arrayNomes.length
console.log(`A media de todas as notas de alunos e : ${mediaNotas}`)