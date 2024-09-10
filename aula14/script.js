function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value === "" || fano.value > ano) {
        window.alert('ERRO')
    } else {
        window.alert('ok')
    }
}