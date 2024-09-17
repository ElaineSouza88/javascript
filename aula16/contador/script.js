function contador() {
    let ini = document.getElementById('n1')
    let fim = document.getElementById('n2')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res') //nome da DIV que terá a resposta

    if (ini.value.length == 0 || fim.value.lenth == 0 || passo.value.length == 0) {
        window.alert('Preencha todos os campos !')
    } else {
        res.innerHTML = ('Contando: ') // teste para aparecer a palavra contar ao clicar no botão.

        let i = Number(ini.value) // variável criada para transformar string em nº
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p){
            res.innerHTML += `${c} `
        }
    }
}
