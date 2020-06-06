const nome = 'Rebeca'
const nome2 = 'paulo'
const nome3 = 'joao'
const concatenacao = 'olá ' + nome + '!'

//tamplate string ` coloque dentro da crase `
const template = `
Tudo bem
${nome}, ${nome2}, ${nome3}!`
console.log(concatenacao, template)

//expressoes...
console.log(`1=1 = ${1+1}`)

//vou pegar a palavra cuidado e passar para up que vai receber to texto.toUpperCase e tornar a palavra maiuscula
const up = texto => texto.toUpperCase()
console.log(`Ei....${up('cuidado')}!`)//chamada a função dentor da expressão