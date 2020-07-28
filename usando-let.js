//let usa o valor do bloco
let numero = 1
{
    let numero = 2
    console.log('dentro',numero)//procura o scopo mais perto, scopo bloco,funcao,global
}
console.log('fora',numero)