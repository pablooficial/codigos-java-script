function imprimirSoma (a,b){
    console.log(a+b)
}
imprimirSoma(2,30,2,4)//a soma so pega os 2 primeiros numeros, pq so estou chamando a,b

function soma (a,b=1){
return a+b
}
console.log(soma(2))