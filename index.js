var setaEsquerda= window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex; margin-right: 200px;"
    setaEsquerda.style = "display:flex; margin-top: 65px"
    setaDireita.style = "display:none"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex"
}




