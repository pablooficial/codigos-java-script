const saudacao = 'Opa' //contexto léxico
console.log(saudacao)

function exec() {
    const sauda = 'Falaa'
    return sauda
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(exec())
console.log(cliente)
