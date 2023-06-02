function botaoGerarImagens(){
    var vezes = document.getElementById("vezes").value
    document.getElementById("resultado").innerHTML = ''

    for (var i = 1; i<=vezes ; i++) {
        document.getElementById("resultado").innerHTML += 
            "<img src='http://www.w3.org/2000/svg' class='coracao'>"
    } 
}
