function Calcular(){
    var usuario = document.getElementById("usuario").value

    var senha = document.getElementById("senha").value

    if (usuario == "adm" && senha == "123"){
        document.getElementById("res").innerHTML =`<b class="verde">Você consegiu acessar</b>`
    } else {
        document.getElementById("res").innerHTML =`<b class="vermelho">Usuário ou senha inválido</b>`
    }   
}