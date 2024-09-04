var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)

// Para o JavaScript o índice inicia a contagem do 0
// 0 = Domingo
// 1 = Seg
// 2 = Ter
// 3 = Quar
// 4 = Qui
// 5 = Sex
// 6 = Sab

console.log(diaSem)

// diaSem = 4

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia Inválido')
        break
}