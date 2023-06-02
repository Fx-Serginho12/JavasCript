function Botaocalcular(){
    var numero = document.getElementById("numero").value
    var dobro = numero * 2
    var metade = numero / 2
    document.getElementById("resultado").innerHTML += `O dobro do numero ${numero} é igual a ${dobro} e a metade é igual a ${metade} <br>`
}
function Botaolimpar(){
    document.getElementById('resultado').innerHTML = ""
    document.getElementById("numero").value = ""
}