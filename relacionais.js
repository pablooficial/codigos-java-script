console.log('01:', '1' == 1) //se 1 for igual a 1 , aparecera true/verdadeiro
console.log('02', '1' === 1) // extritamente igual
console.log('03', '3' != 3) // diferente? falso, ele é igual
console.log('4', '3' !== 3) //estritamente diferente? sim

console.log('05', 5 < 10) //menor
console.log('06', 5 > 10) //maior
console.log('07', 5 <= 10) //menor igual
console.log('08', 5 >= 10) //maior igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09', d1 === d2)
console.log('10',d1.getTime() === d2.getTime())