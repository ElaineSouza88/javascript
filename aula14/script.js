function verificar() {
    let data = new Date() // armazena uma nova data
    let ano = data.getFullYear() // armazena a data do ano com os  4 dígitos
    let fano = document.getElementById('txtano') // armazena o ano que o usuário digitar na cx de texto 'Ano de Nascimento'.
    let res = document.querySelector('div#res') // armazena o resultado do cálculo do ano atual - ano do usuário. *esse formato é mais moderno para escrita mas pode ser usado tbm o document.getElementById('res')

    //Condição para teste
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO... Verifique os dados inseridos')
    } else {
        let fsex = document.getElementsByName('radsex')  // pega o Sexo do documento radsex, e armazena na variável fsex.
        let idade = ano - Number(fano.value) // armazena o resultado do ano atual - o ano preenchido pelo usuário.
        let genero = ''  // variável vazia para guardar o valor do índice.
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //Segunda condição para marcação de masc ou fem
        if (fsex[0].checked) {  
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos !`
    }
}