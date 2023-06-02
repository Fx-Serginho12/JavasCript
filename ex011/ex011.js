function Calcular(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    if (idade >= 16 && idade < 18 || idade > 70) {
        document.getElementById("res").innerHTML = `<b class="amarelo">você não é obrigado a votar</b>`
    }
    else if (idade >= 18 && idade < 70) {
        document.getElementById("res").innerHTML = `<b class="verde">você é obrigado a votar</b> `
    } else{
        document.getElementById("res").innerHTML = `<b class="vermelho">você não pode votar</b>`
    }
}