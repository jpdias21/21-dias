let num1 = []

let digite = Number(prompt('Digite um numero :'))

num1[0] = digite - 1
num1[1] = digite

for(let i = 2 ; i < 10 ; i++ ){
    num1[i] = num1[i - 2] + num1[i - 1]
}
console.log(num1)