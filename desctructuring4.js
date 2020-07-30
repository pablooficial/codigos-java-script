function rand([min = 0, max = 1000]) {
    //depois do igual vc esta criando um novo array
    if (min > max) [min, max] = [max, min] // se o valor min for maior que o valor maximo, inverta as variaveis
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))//vc pode passar os 2 valores, 1 valor ou nenhum valor