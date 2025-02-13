let arrayNotas = []
let arrayNomes = []
let arrayMulheres = []
let arrayNotasMulheres = []
let arrayNotasHomems = []
let arrayHomens = []

let cadastrarAluno = true

while(cadastrarAluno){

    cadastrarAluno = prompt('Voce deseja cadastrar algum aluno \n1. Sim \n2.Nao')
    
    if(cadastrarAluno === '1'){
        let sexoAluno = prompt('Qual o sexo do aluno \n1.Masculino \n2.Feminino')
        if(sexoAluno === '1'){
            arrayHomens.push('Homem')   
            let notaAlunoMaiorQue10 = true
            while(notaAlunoMaiorQue10 ){
                notaAluno = parseInt(prompt('Qual a nota do aluno :'))
                
                if(notaAluno > 10){
                    console.log('Voce esta colocando uma nota maior que 10 e isso esta incorreto')
    
                }else{
                    arrayNotasHomems.push(notaAluno)
                    arrayNotas.push(notaAluno)
                    let nomeAluno = prompt('Qual o nome do aluno')
                    arrayNomes.push(nomeAluno)
                    notaAlunoMaiorQue10 = false
                }
            }
        }else if(sexoAluno === '2'){
            arrayHomens.push('Mulher')
            let notaAlunaMaiorQue10 = true
            while(notaAlunaMaiorQue10 ){
                notaAluna = parseInt(prompt('Qual a nota da aluna :'))
                if(notaAluna > 10){
                    console.log('Voce esta colocando uma nota maior que 10 e isso esta incorreto')
    
                }else{
                    arrayNotasMulheres.push(notaAluna)
                    arrayNotas.push(notaAluna)
                    let nomeAluno = prompt('Qual o nome do aluna')
                    arrayNomes.push(nomeAluno)
                    notaAlunaMaiorQue10 = false
                }
            }
        }

    }else if(cadastrarAluno === '2'){
        console.log('Voce acabou por aqui')
        cadastrarAluno = false
    }else{
        console.log('Voce fez algo de errado')
    }
}
console.log(arrayNotas)
console.log(arrayNomes)
console.log(arrayMulheres)
console.log(arrayHomens)

let notasSomadas = arrayNotas.reduce((acumulador , nota ) => acumulador + nota, 0)

let mediaNotas = notasSomadas / arrayNotas.length
console.log(`A media das notas de todos os alunos e ${mediaNotas}`)

console.log(`O total de homens que enviaram suas notas foram ${arrayHomens.length}`)

let notasAcimaDe7 = arrayNotasMulheres.filter(nota => nota > 7)
console.log(`Tivemos ${notasAcimaDe7.length} alunas que tiraram acima de 7.`)

let maiorNota = Math.max(...arrayNotasHomems)
let maiorNotasHomems = arrayNotasHomems.filter(nota => nota === maiorNota)
console.log(`A maior nota entre homems foi : ${maiorNota}`)


