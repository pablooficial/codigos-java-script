let dados = false
console.log(dados) //ássando o valor falso

dados = true
console.log(dados) //passando o valor verdadeiro

dados = 1
console.log(!!dados)// !! =2 interrogação vc passa verdadeiro

dados = 1
console.log(!dados)//! = 1 interrogação vc passa negando

console.log('Exibe numeros verdadeiros..')
console.log(!!'Exibe numeros..')
console.log(!!3)
console.log(!!-1)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(dadaos = true))

console.log('Exibe numeros falsos..')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(dados = false))

console.log('Finalizando..')
console.log(!!(''|| null || 0 || ''))//se tiver um verdadeiro sera verdadeiro

//nome recebe um valor, se nao tiver preenchido, vai imprimir desconhecido
let nome =''//'pablo
console.log(nome || 'Desconhecido')