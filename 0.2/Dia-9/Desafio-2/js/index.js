let idade = parseInt(prompt('Digite sua idade'))
let ano = 2025
let anoDeNascimento= ano - idade

for(let i = 0 ; i <= idade; i++){
    console.log(`${anoDeNascimento + i} - ${i} anos de idade`);
}