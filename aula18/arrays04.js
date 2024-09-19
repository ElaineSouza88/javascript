//Exemplo para mostrar um vetor na tela

// let num = [7, 4, 5, 6, 8]
// num.sort()
// console.log(num)

// for (let pos = 0; pos < num.length; pos ++){ // variável inicia em 0 / enquanto posição for menor que o tamanho do vetor / acrescente mais 1 a pos.
//     console.log(num[pos]) //exiba o vetor na posição da variável pos
// }

//Forma mais correta de escrita usando o in

let valores = [2,4,1,6,8]
console.log(valores)

for (let pos in valores) { // para cada posição dentro de num
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // exibe os valores do vetor
}