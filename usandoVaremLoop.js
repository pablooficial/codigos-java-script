const funcs = []

for (var i = 0 ; i < 10 ; i++){//let tem a memoria e exibe no funcs
    funcs.push(function(){
    console.log(i)
})
}
//console.log('o valor final é:',i)

funcs [2]()