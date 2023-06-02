var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdCadastro'))
if (listaUsuarios == null) {
    listaUsuarios = []
}

function botaoEntrar() {
    var usuario = document.getElementById("login").value
    var senha = document.getElementById("senha").value
    document.getElementById("login").value = ''
    document.getElementById("senha").value = ''

    var encontrou = false
    listaUsuarios.forEach ( item => {
        if (usuario == item.login && senha == item.senha) {
            alert (' PARABÉNS você consegiu entrar')
            encontrou = true
        }
    } )

    if (encontrou == false) {
        alert('Verifique seu o seu usuario ou senha que tá incorreto')
    }

   //for (var i in listaUsuarios){
       // if (usuario == listaUsuarios[i].login && senha == listaUsuarios[i].senha){
           // alert (' PARABÉNS você consegiu entrar')
            //return true
        //}
    //}

    //alert ('Verifique seu o seu usuario ou senha que tá incorreto')

}
function botaoCadastrar(){
    location.href = 'ex026.html'
}
