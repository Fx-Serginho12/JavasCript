function Ímpares() {
    var inicio = document.getElementById(`numero`).value
    var final = document.getElementById(`final`).value
    inicio = Number (inicio)
    final = Number (final)
    document.getElementById('res').innerHTML = `Relação de Nº ímpares de ${inicio} até ${final}<br><br>`
    for (var numero = inicio; numero <= final; numero++) {

        if (numero % 2 == 0) {
            console.log(`${numero} é par`)
        } else {
            console.log(`${numero} é impar`)
            document.getElementById("res").innerHTML += `${numero} <br> `
        }
    }
}
