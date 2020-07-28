//fuja do scopo global
function teste(){
    var local = 123
    console.log(local)
}

var um = 1
{
    var um = 2
    console.log('dentro',um)//var scopo bloco,funcao,
}

console.log('fora',um)
 