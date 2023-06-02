

function VouCasar(){
    var diaSemana = parseInt(Math.random()*14)
    var nome = document.getElementById("nome").value
    switch (diaSemana){
        case 1:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Janeiro`    
        case 2:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Fevereiro`    
        case 3:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Março`    
        case 4:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Abril`    
        case 5:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Maio`    
        case 6:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Junho`    
        case 7:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Julho`    
        case 8:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Agosto`    
        case 9:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Setembro`    
        case 10:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Outubro `    
        case 11:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Novembro `    
        case 12:
        document.getElementById("res").innerHTML = `${nome}, você vai se casar no mês de Dezembro`    
        case 13:
        document.getElementById("res").innerHTML = `${nome}, você não vai se casar`    
        case 14:
        document.getElementById("res").innerHTML = `${nome}, você no baile funk com os amigos`    
    }
  
}
