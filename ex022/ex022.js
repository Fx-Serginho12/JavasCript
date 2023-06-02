var listraglobal = []
var listraglobalImagem = []

function Filmes() {
    document.getElementById(`res`).innerHTML = ''
    var Filmes = document.getElementById('filmes').value
    listraglobal.push(Filmes)

    document.getElementById(`res`).innerHTML = ''
    var linkfilmes = document.getElementById('linkfilmes').value
    listraglobalImagem.push(linkfilmes)
    
    for (var i = 0; i < listraglobal.length; i++){
        document.getElementById(`res`).innerHTML += ` <br>${listraglobal[i]}<br><img  class ="link" src="${listraglobalImagem[i]}">`
     }
}
