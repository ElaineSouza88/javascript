// Adicionando elementos em posições específicas em um array

// let num = [3, 6, 8]
// num.push(9)  // acrescenta ao final do array
// console.log(num)

// let num = [1, 3, 5]
// num.unshift(7) // acrecenta no início do array
// console.log(num)

//Nessa última opção é necessário colocar a posição do índice que se deseja inserir um dado:

let num = [1, 5, 7, 9]
num.splice(0, 1, 8) // 1 = posição do índice que quer retirar / 1 = qunt de conteúdo que quero remover / 8 = valor que será inserido nesta posição
console.log(num)