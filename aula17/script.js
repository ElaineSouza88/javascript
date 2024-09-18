function tabuada() {
    let num = document.getElementById('idvalor') //variável para armazenar o valor digitado pelo usuário.
    let tab = document.getElementById('seltab') // variável para armazenar o número do seletor da tabuada.

    if (num.value.length == 0) {
        window.alert('Digite um valor !')
    } else {
        let n = Number(num.value) //valor do usuário
        let c = 1 // contador
        tab.innerHTML = '' // exibirá um campo vazio antes de iniciar o cálculo

        for (let c = 1; c <=10; c++) {
            let item = document.createElement('option') //criou elemento com nome option
            item.text = ` ${n} x ${c} = ${n * c} ` // exibe e faz o cálculo da tabuada.
            item.value = `tab ${c} ` //para outras linguagems que necessitam saber o valor do item selecionado pelo usuário.
            tab.appendChild(item) //adicona a tabuada o item option criado
        }
    }
}