
function Filmes() {
    var Filmes = [`Filme Avatar 2 - O Caminho da Água`, `Filme A Culpa é das Estrelas`, `Filme A Era do Gelo 4`, `Filme A Pequena Sereia`, `Filme Homem-Aranha: Através do Aranhaverso - Parte 1`, `Filme Super Mario Bros. Filme`]
   
    for (var i = 0; i < Filmes.length; i++){
        console.log( Filmes[i])
        document.getElementById('res').innerHTML += `<br>Posição no vetor ${i} - ${Filmes[i]}<br>`
    }
}
