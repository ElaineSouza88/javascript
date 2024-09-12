//Faça um programa que leia nome, idade e qual linguagem de programação está aprendendo.

function coletarDados () {
    //usando prompt
    let nome = prompt('Qual é seu nome? ')
    let idade = prompt('Sua idade: ')
    let linguagem = prompt('Qual linguagem de programação você estuda? ')

    //para exibir a informação usarei o alert
    alert(`Ola ${nome} ! Você tem ${idade} e está aprendendo ${linguagem} como linguagem de programação.`)

    let res = prompt(`Você gosta de estudar ${linguagem}? [1] Sim [2] Não.`)

    if (res == 1) {
        alert('Muito bom, continue estudando e você terá muito sucesso !')
    } else {
        prompt('Ahh que pena...Já tentou aprender outras linguagens? [1] Sim [2] Não')
    } if (res == 1) {
        alert('Não desista, programar é difícil mesmo, mas continue estudando...') 
    } else {
        alert('Você pode tentar novamente, vai que na segunda vez dá certo?!')
    } 
    
    alert('Obrigada pelas respostas!')
    }
