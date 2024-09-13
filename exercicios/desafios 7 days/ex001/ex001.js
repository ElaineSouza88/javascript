// Desafio 7 days of Code - Alura

// Comparação de variáveis de diferentes tipos:
//Em JavaScript, dependendo da forma como o código é escrito, a linguagem faz uma conversão automática do conteúdo da variável para um tipo booleano, fazendo com que todos retornem como true. Ex:

// console.log( false == '0') // O js tenta converter a string 0 para número, resultando em 0. Compara e converte false em 0.
// console.log(null == undefined) // Null representa qualquer valor nulo, que é igual ao undefined que repres. uma varíavel não inicializada.
// console.log('\t\r\n' == 0) // JS tenta converter a string para núm. Uma string vazia ou com espaços em brancos são convertios para 0.
// console.log(' ' == 0) // Compara o espaço em branco com a string, converte para 0.


//O objetivo é escrever o seguinte código abaixo com a comparação correta entre os dados das variáveis:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (1 === '1') {
    console.log(`As variáveis ${numeroUm} e ${stringUm} tem o mesmo valor, mas são de tipos diferentes.`)
} else {
    console.log(`As variáveis ${numeroUm} e ${stringUm} não tem o mesmo valor e tipo.`)
}

if (numeroTrinta === '30') {
    console.log(`As variáveis ${numeroTrinta} e ${stringTrinta} tem o mesmo valor e tipo.`)
} else {
    console.log(`As variáveis ${numeroTrinta} e ${stringTrinta} não tem o mesmo tipo.`)
}

if (numeroDez === '10') {
    console.log(`As variáveis ${numeroDez} e ${stringDez} tem o mesmo valor, mas são de tipos diferentes.`)
} else {
    console.log(`As variáveis ${numeroDez} e ${stringDez} não tem o mesmo valor.`)
}

//Resolução --> Utilizei o sinl de igualdade idêntica ===, pois em JS esse sinal compara o tipo e o valor antes da conrversão e em seguida exibe o resultado.