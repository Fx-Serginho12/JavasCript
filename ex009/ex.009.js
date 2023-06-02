function Calcular(){
    var nome = document.getElementById("nome").value

    var idade = document.getElementById("idade").value

    if (idade >= 18){
        document.getElementById("res").innerHTML =`PARABÉNS ${nome}, você pode tirar CNH <br> <img class="class1" src="../img/CNH-Perguntas-e-Respostas-Frequentes.jpg.jpg" alt=""> `
    } else {
        document.getElementById("res").innerHTML =`PARABÉNS ${nome}, você não pode tirar CNH `
    }

    
}