var botoesNumericos = document.querySelectorAll("button")
for (var i = 0; i < botoesNumericos.length; i++){
    var botaoNumerico = botoesNumericos[i]
    botaoNumerico.addEventListener('click', printarBotao)
}

var resultadoCalculadora = document.querySelector(".resultado")
function printarBotao(event){
    var botao = event.target
    botao = botao.innerText
    resultadoCalculadora.innerText = resultadoCalculadora.innerText + botao 
}

