let vet = [2, 5, 6, 8, 9, 3]
vet.sort()
console.log(vet)

let pos = vet.indexOf(5)
if (pos == -1) {
    console.log('Esse valor não existe dentro do vetor.')
} else {
    console.log(`O valor está na posição ${pos} .`)
}
