var botoesNumericos = document.querySelectorAll(".number")
var botoesOper = document.querySelectorAll(".operador")
var botaoReset = document.querySelector("#reset")
var botaoIgualdade = document.querySelector("#igual")

var resultadoCalculadora = document.querySelector(".resultado")
var contaCalculadora = document.querySelector(".conta")

for (var i = 0; i < botoesNumericos.length; i++){
    var botaoNumerico = botoesNumericos[i]
    botaoNumerico.addEventListener('click', printarBotao)
}

for (var i = 0; i < botoesOper.length; i++){
    var botaoOper = botoesOper[i]
    botaoOper.addEventListener('click', printarBotao)
    botaoOper.addEventListener('click', mandarDadosParaTelaCalc)
}

botaoReset.addEventListener('click', limparTela)
botaoIgualdade.addEventListener('click', calculo)

function printarBotao(event){
    var botao = event.target
    botao = botao.innerText
    resultadoCalculadora.innerText = resultadoCalculadora.innerText + botao 
}

function limparTela(){
    resultadoCalculadora.innerText = "0"
    contaCalculadora.innerText = ""
}

function mandarDadosParaTelaCalc() {
    contaCalculadora.innerText = resultadoCalculadora.innerText
    resultadoCalculadora.innerText = ''
}

function calculo(){
    var eq = contaCalculadora.innerText + resultadoCalculadora.innerText
    resultadoCalculadora.innerText = eval(eq)
    contaCalculadora.innerText = ""
}

