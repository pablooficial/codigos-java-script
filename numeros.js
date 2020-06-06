const peso1 = 1.0 //recebe o  valor 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))//verifica se o valor é inteiro Numer=função

const avaliacai1 = 9.871
const avaliacai2 = 6.871

const total = avaliacai1 * peso1 + avaliacai2 * peso2
const media = total / (peso1 + peso2)

//toFixed = mostra a quantidade de numeros que quer que imprima
//toString() = retorna o valor constante
//toString(2) = gera o valor binario
console.log(media.toFixed(2)) 
console.log(typeof media) // verifica o tipo
