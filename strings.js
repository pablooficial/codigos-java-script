const escola = "cod3r"
console.log(escola.charAt(1))//charAt = pega caracter dentro da string
console.log(escola.charCodeAt(3)) //charCodeAt = pego o valor (3) no codigo relacionado a tabela unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))//substring = vai do indice 0 e me de 3 caracters

console.log('Escola '.concat(escola).concat("!")) //concat = junta as coisas
console.log('Escola '+ escola + "!") //+ = soma os termos
console.log(escola.replace(3,'e')) //replace = subistitui o 3 termo do texto pela letra e

console.log('ana,maria,pedro'.split(','))//split = passa os elementos para um array, sepando pelo termo ,