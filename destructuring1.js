const pessoa = {
    nome: 'Pablo Waniery',
    idade: 30,
    endereco: {
        logradouro: 'Centro',
        bairro: 'Martins',
        numero: 001
    }
}

//garanta que o dado esteje setado
// obj = {} chave
//array = [] 

const { nome, idade } = pessoa // acessa atributos dentro do objeto
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // acessa atributos e atribui uma variavel
console.log(n, i)

const { sobrenome = true } = pessoa // coloca atributo dentro de um obj
console.log(sobrenome)

const { endereco: { logradouro, bairro } } = pessoa // acessa um obj dentro de outro
console.log(logradouro, bairro)
