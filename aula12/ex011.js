var idade = 15
if (idade < 16) {
    console.log(`Você não pode votar !`)
} else if (idade < 18 || idade > 65) {
    console.log(`Seu voto é opciona!`)
} else {
        console.log(`Você tem ${idade} anos de idade e seu voto é obrigatório.`)
}