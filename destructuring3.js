function rand({ min = 0, max = 1000 }) { //rand retorna um numero aleatorio
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //floor = arrendonda o valor pra baixo
}

console.log(rand({}))

const obj = { max: 50, min: 40 }//passa parametros de valor max e min para o numero aleatorio
console.log(rand(obj))