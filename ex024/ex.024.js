function calcular(){
    var nome = document.getElementById("nome").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value

    var valida = validarNota(nota1, nota2)
    if (valida == false)
    {
        return
    }
    var media = calcularMedia(nota1, nota2)
    
    exibirAprovacao(media, nome, nota1, nota2)
}



function validarNota(nota1, nota2){
    if (nota1 > 10){
        alert ("Nota 1 não pode ser maior que 10")
        return false
    }
    if (nota2 > 10){
        alert ("Nota 2 não pode ser maior que 10")
        return false
    }
} 
function calcularMedia(nota1, nota2){
    var media = (Number(nota1) + Number(nota2)) / 2
    return media
}
function exibirAprovacao(media, nome, nota1, nota2){
    if (media >= 7){
        document.getElementById("res").innerHTML =`<b class="aprov">O aluno ${nome} tirou nota ${nota1} e ${nota2} sua media foi ${media} <br><b> PASSOU DE ANO`
      } else {
        document.getElementById("res").innerHTML =`<b class="aprov">O aluno ${nome} tirou nota ${nota1} e ${nota2} sua media foi ${media} <br><b> NÃO PASSOU DE ANO`
      }
}




   
