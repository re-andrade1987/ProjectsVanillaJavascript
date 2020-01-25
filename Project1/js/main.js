let escrever = document.getElementById('escrever')
let mostrar = document.getElementById('mostrar')
let enviar = document.getElementById('enviar')
let limpar = document.getElementById("limpar")

enviar.addEventListener('click', entregarMensagem)

function entregarMensagem(){
    let mostrarValue = mostrar.value
    escrever.innerHTML = mostrarValue

}

limpar.addEventListener('click', limparMensagem)

function limparMensagem(){
    escrever.innerHTML = ''
    mostrar.value = ''
}   