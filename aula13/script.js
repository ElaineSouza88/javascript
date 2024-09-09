function carregar() {
    let msg = window.document.getElementById('msg') // irá exibir a mensagem que está dentro desse id.

    let img = window.document.getElementById('imagem') // irá exibir a imagem que está dentro desse id.

    let data = new Date() // pega a hora atual do Desktop.

    // let hora = data.getHours() // variável para exibir a data atual.

    let hora = 19

    msg.innerHTML = `Agora são ${hora} horas !` // exibirá o conteúdo da variável hora.

    if (hora >= 0 && hora < 12) {
        //Bom dia !
        img.src = 'imagens/manha.png'
        document.body.style.background = '#FAEF2A'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde !
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#A5C4D7'
    } else {
        //Boa noite!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#5F4C79'
    }
}