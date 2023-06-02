function Ímpares() {
    var numero = document.getElementById(`numero`)
    document.getElementById('res').innerHTML = `Relação de Nº ímpares até 20<br><br>`
    for (var numero = 1; numero <= 20; numero++) {

        if (numero % 2 == 0) {
            console.log(`${numero} é par`)
        } else {
            console.log(`${numero} é impar`)
            document.getElementById("res").innerHTML += `${numero} <br> `
        }
    }
}
