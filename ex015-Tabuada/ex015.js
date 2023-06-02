function Tabuada(){
    var numero = document.getElementById(`numero`).value
    var contador = 1
    document.getElementById(`res`).innerHTML = `Tabuada do ${numero} <br><br>`
    while (contador <= 10){
         resultado = numero * contador
        document.getElementById("res").innerHTML += `${numero} x ${contador} = ${resultado} <br> `
        contador++
    }
}