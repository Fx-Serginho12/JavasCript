function Calcular(){
    var nome = document.getElementById("nome").value

    var nr1 = document.getElementById("nr1").value

    var nr2 = document.getElementById("nr2").value

    if (nr1 > 10){
        alert ("Nota 1 não pode ser maior que 10")
        return
    }
    if (nr2 > 10){
        alert ("Nota 1 não pode ser maior que 10")
        return
    }
    nr1 = Number(nr1)
    nr2 = Number(nr2)
    var media = (nr1 + nr2) / 2
   
    if (media >= 7){
    document.getElementById("res").innerHTML =`<b class="aprov">O aluno ${nome} tirou nota ${nr1} e ${nr2} sua media foi ${media} <b> PASSOU DE ANO`
  } else {
    document.getElementById("res").innerHTML =`<b class="aprov">O aluno ${nome} tirou nota ${nota1} e ${nota2} sua media foi ${media} <b> NÃO PASSOU DE ANO`
  }
}