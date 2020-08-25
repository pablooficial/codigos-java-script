function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // OU //Se o primeiro for verdadeiro não analisa o segundo
    const comprarTv50 = trabalho1 && trabalho2 // E // Somente se os dois derem certos
    const comprarFogao = trabalho1 != trabalho2 // OU..OU // Se trab1 for diferente de trab2
    const manterSaudavel = !comprarSorvete //negação logica

    return { comprarSorvete, comprarTv50, comprarFogao, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))