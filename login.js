function signin(){
    let signinEmail = document.getElementById("signin-email").value;
    let signinPassword = document.getElementById("signin-password").value;
    
    let strUsuarios, objUsuarios;

    let userValid = {
        Email: '',
        Password: ''
    }

    strUsuarios = localStorage.getItem("strUsuarios");
    strUsuarios = JSON.parse(strUsuarios);

    strUsuarios.forEach((item) => {
        objUsuarios = JSON.parse(item);
        if(signinEmail == objUsuarios.EmailCad && signinPassword == objUsuarios.PasswordCad){
            userValid = {
                Email: objUsuarios.EmailCad,
                Password: objUsuarios.PasswordCad
            }
        }
    })
    
    if (signinEmail == userValid.Email && signinPassword == userValid.Password){
        alert("Email cadastrado")
    }
    else{
        alert("Email não cadastrado")
    }
}


