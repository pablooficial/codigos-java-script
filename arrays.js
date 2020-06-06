//arrays começa do 0
const valores = [7.7,8.9,6.3,9.2]
console.log('esses sao os valores:',valores[0],valores[3])
console.log(valores[2] + valores[3])
console.log(valores[4])//sem esta no array aparece undefined

valores [4] = 10 //o array acima recebe o 4 array com o numero 10
console.log(valores) 
console.log(valores.length)//exibe quantos numeros tem no array

const valores2 = [10,15,20]
valores2.push ({id:3},false,null,'teste')//posso misturar dados, *lembrando, não é recomendavel.
console.log(valores2)

console.log(valores2.pop())//pop =tira o ultimo elemento ro array
delete valores2[0] //deleta um elemento do array indicado no indice[] 
console.log(valores2)

console.log(typeof valores2) // fala o tipo do array