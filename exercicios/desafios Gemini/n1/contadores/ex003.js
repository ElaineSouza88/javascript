// let tab = 2
// for (let c = 1; c <= 10; c ++) {
//     console.log(`${tab} x ${c} = ${tab * c}`)
// }

// let c = 1 // declarar e iniciar contagem
// let tab = 3 // valor que será a tabuada

// while (c <=10) { 
//     let res = tab * c  //variável para guardar valor do cálculo
//     console.log(`${tab} x ${c} = ${res}`) // exibiçao no console
//     c++ // valor da variável + 1
// }

let c = 1
let tab = 2

do {
    let res = tab * c
    console.log(`${tab} x ${c} = ${res}`)
    c++
} while (c <= 10)