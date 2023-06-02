var listaCadastro = []

listaCadastro = JSON.parse(localStorage.getItem('bdCadastro'))
if (listaCadastro == null) {
    listaCadastro = []
}

exibirCadastro()

function validarCadastro(nome, usuario, senha, confirmeSenha) {
    if (nome != '' && usuario != '' && senha != '' && confirmeSenha != '') {
        return true
    } else {
        return false
    }
}

function botaoEntrar() {
    var nome = document.getElementById("nome").value
    var Usuario = document.getElementById("login").value
    var senha = document.getElementById("senha").value
    var confirmarSenha = document.getElementById("confirmeSenha").value
    location.href = 'login.html'

    debugger
    var possoCadastrar = validarCadastro(nome, Usuario, senha, confirmarSenha)
    if (possoCadastrar == false) {
        alert(`Verifique os dados antes de cadastrar`)
        return
    } else


    var cadastro = {
        nome: nome,
        login: Usuario,
        senha: senha,
        confirme: senha
    }
    listaCadastro.push(cadastro)
    localStorage.setItem('bdCadastro', JSON.stringify(listaCadastro))

    document.getElementById("nome").value = ''
    document.getElementById("login").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("confirmeSenha").href()

    exibirCadastro()
    alert ('Cadrastro completo')
}

function exibirCadastro() {
    document.getElementById('resultado').innerHTML = ''

    listaCadastro.forEach( (item, indice) =>{
        document.getElementById('resultado').innerHTML +=
            `<div class='div-2'>
               <b>Nome:</b> ${item.nome} - <b>Login:</b> ${item.login}
               <img src = 'excluir.svg' class = 'excluir' onclick='excluirUsuario(${indice})'>
           </div>`
    } )
    /*for (var i in listaCadastro) {
        document.getElementById('resultado').innerHTML +=
            `<div class="div-2">
               <p> Nome: ${listaCadastro[i].nome} - Login: ${listaCadastro[i].login}</p>
           </div>`
    }
    */
}
function excluirUsuario(indice){
    listaCadastro.splice (indice, 1)
    localStorage.setItem('bdCadastro', JSON.stringify(listaCadastro))
    exibirCadastro()
}
