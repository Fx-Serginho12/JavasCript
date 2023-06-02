var nrSorteado = parseInt(Math.random()*100)
alert(nrSorteado)

var tentativa = 0
function Chutar_o_numero(){
    var numero = prompt(" Qual o número sorteado?")
    console.log(nrSorteado)
    
    tentativa++


    if (nrSorteado == numero) {
        document.getElementById("res").innerHTML =` <b class="preto">PARABÉNS VOCÊ ACERTOU NO N° ${numero} EM ${tentativa} TENTATIVA  </b><br>`
    } 
    else if (nrSorteado > numero)
    {
        document.getElementById("res").innerHTML += `Você chutou ${numero} pensei em um número MAIOR <br>`
    }
    else if (nrSorteado < numero)
    {
       document.getElementById("res").innerHTML += `Você chutou ${numero} pensei em um número MENOR <br>`
    }
}

function Limpar(){
   document.getElementById("res").innerHTML = ""
   nrSorteado = parseInt(Math.random()*100) + 1
   tentativa = 0
}
