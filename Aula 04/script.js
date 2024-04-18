let user, pass, result

function verificaLogin(){
    user = document.getElementById('usuario').value
    pass = document.getElementById('senha').value
    result = (user == "emily" && pass =="1234") ? "Acesso Concedido" : "Acesso Negado"
    document.getElementById("msg").innerHTML = result + ", " + user

}