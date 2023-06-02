var listaFilmes = []

//Buscando as informações do localStorage gravadas no Navegor
//Utilizo o método getItem com o nome exatamente que utilizamos no setItems
listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null){
    listaFilmes = []
}
exibirFilmes()
//Exibindo no console a lista de files que carrego no vetor
 console.log(listaFilmes)

   function validarCadastro(nomeFilmes, imagemFilme){
    if (nomeFilmes != '' && imagemFilme != '') {
        return true
    } else {
        return false
    }
   }

function botaoFilmes() {
   var nomeFilmes = document.getElementById("nome").value
   var imagemFilme = document.getElementById("filmes").value
   
   var possoCadastrar = validarCadastro(nomeFilmes, imagemFilme)
    if (possoCadastrar == false) {
        alert (`Verifique os dados antes de cadastrar`)
        return
    } 
   
   var filme = {
    nome: nomeFilmes,
    link: imagemFilme
   }
   listaFilmes.push(filme)
   //Utilizando o localStorage que irá gravar o nosso vetor de filme
   //no método setItem, preciso passar como parâmetro o nome do espaço
   //que o navegador irá reservar e passo também o vetor de filmes
   //convertido em formato JSON
   localStorage.setItem ( 'bdFilmes', JSON.stringify(listaFilmes) )

   exibirFilmes()

   document.getElementById("nome").value = ''
   document.getElementById("filmes").value = ''
   document.getElementById("nome").focus()
}

function botaoIndicado(){
   var nrSorteado = parseInt(Math.random() * listaFilmes.length)
   document.getElementById('indicado').innerHTML = 
       `<div>
           <img src='${listaFilmes[nrSorteado].link}' class='img'> 
           <p>${listaFilmes[nrSorteado].nome}</p>
       </div>`
}

function exibirFilmes() {
    document.getElementById('resultado').innerHTML = ''

   for(var i in listaFilmes) {
       document.getElementById('resultado').innerHTML +=
           `<div>
               <img src='${listaFilmes[i].link}' class='img'>
               <p>${listaFilmes[i].nome}</p>
           </div>`
   }
}


function botaoLimpar () {
    listaFilmes = []
   localStorage.setItem ( 'bdFilmes', JSON.stringify(listaFilmes) )
   exibirFilmes ()
}