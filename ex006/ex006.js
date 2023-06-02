function Calcular(){
    var nr1 = document.getElementById("nr1").value
    var nr2 = document.getElementById("nr2").value

    var Soma = nr1 + nr2
    var opSubracao = nr1 - nr2
    var opMultiplicacao = nr1 * nr2
    var opDivisao = nr1 / nr2
    var opExponenciacao = nr1 ** nr2
    var opResto = nr1 % nr2

    document.getElementById("resultados").innerHTML =`${nr1} + ${nr2} = ${Soma} <br>
    ${nr1} - ${nr2} = ${opSubracao} <br>
    ${nr1} * ${nr2} = ${opMultiplicacao} <br>
    ${nr1} / ${nr2} = ${opDivisao} <br>
    ${nr1} ** ${nr2} = ${opExponenciacao} <br>
    ${nr1} % ${nr2} = ${opResto} <br>
    `
}