// Funções com parametros: Construa um programa quem mostre se um número é par ou ímpar.

function parImp(n) {
    if (n % 2 == 0) {
        return `O número ${n} é par !`
    } else {
       return `O número ${n} é ímpar !`
    }
} 
let res = parImp(1) // esse valor é o parametro
console.log(res)