var strUsuarios;

function signup() {
    lerDados();

    let signupNome = document.getElementById("signup-nome").value;
    let signupNascimento = document.getElementById("signup-nascimento").value;
    let signupEmail = document.getElementById("signup-email").value;
    let signupPassword = document.getElementById("signup-password").value;

    let usuario = JSON.stringify({
        Name: signupNome,
        Birth: signupNascimento,
        EmailCad: signupEmail,
        PasswordCad: signupPassword
    });
    
    if (signupNome.length == 0 || signupNascimento.length == 0 || signupEmail.length == 0 || signupPassword.length == 0){
        alert('Preencha os campos vazios');
    }    
    else{
        strUsuarios.push(usuario);
        localStorage.setItem("strUsuarios", JSON.stringify(strUsuarios));
        alert("Usuário cadastrado com sucesso!");       
    }  
}

function lerDados() {
    strUsuarios = localStorage.getItem("strUsuarios");
    strUsuarios = JSON.parse(strUsuarios);
    if (strUsuarios == null){
        strUsuarios = [];
    }    
}
