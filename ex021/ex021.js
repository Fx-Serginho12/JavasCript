var listraglobal = []

function Filmes() {
    document.getElementById(`res`).innerHTML = ''
    var Filmes = document.getElementById(`filmes`).value
    listraglobal.push(Filmes)
    
    for (var i = 0; i < listraglobal.length; i++){
        document.getElementById(`res`).innerHTML += ` ${listraglobal[i]} <br>`
     }
}

