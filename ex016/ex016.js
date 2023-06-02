function Tabuada(){
    var numero = document.getElementById(`numero`).value
    document.getElementById(`res`).innerHTML = `Tabuada do ${numero} <br><br>`
    for ( var contador = 1; contador <= 10;  contador++  ){
         resultado = numero * contador
        document.getElementById("res").innerHTML += `${numero} x ${contador} = ${resultado} <br> `
        
    }
}