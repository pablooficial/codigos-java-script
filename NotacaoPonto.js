console.log(Math.ceil(6.1))//(arredondamento)Math = objet, acessa usando a funcao Ponto para acessar o obj

//voce consegue acessar os membros de um obj apartir da notação ponto
const obj1 = {}
obj1.nome = 'PrimeiroAqui' //cria/acessa dinamicamente um obj dentro de um atributo
//obj1['nome'] = 'Bola2'  //mais flexivel,nao muito recomendado
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome  //recebe o atributo nome e faz ele ficar visivel para quem criar um obj(nome)
    this.exec = function () {
        console.log('Executando')
    }
}

const obj2 = new Obj('Segundo Aqui') //atribuida ao obj nome
const obj3 = new Obj('Terceiro Aqui')
const obj4 = new Obj('')
console.log(obj2.nome)
console.log(obj3.nome)
obj4.exec() //acesso aos membros de um objeto atraves dessa anotação


