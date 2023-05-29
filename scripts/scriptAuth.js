
document.addEventListener("DOMContentLoaded", function(){

let formRegis = document.querySelector('#formRegis');
let login_insc = document.querySelector('#login');
let email_insc = document.querySelector('#email');
let pass_insc = document.querySelector('#pass');
let pass_conf = document.querySelector('#pass_conf')

 function register(){
    login_insc.nextElementSibling.innerHTML = ""
    email_insc.nextElementSibling.innerHTML = ""
    pass_insc.nextElementSibling.innerHTML = ""
    login_insc.nextElementSibling.innerHTML = ""

    if(login_insc.value == ""){
        login_insc.nextElementSibling.innerHTML = "Login non renseigné";
        
    }
    else if(email_insc.value == ""){
        email_insc.nextElementSibling.innerHTML = "Email non renseigné";
        
    }

    else if(pass_insc.value == ""){
        pass_insc.nextElementSibling.innerHTML = "Password non renseigné";
        
    }

    else if(pass_insc.value != pass_conf.value){
        pass_conf.nextElementSibling.innerHTML = "Les mots de pass ne correspondent pas";
        
    }else{

        login_insc.nextElementSibling.innerHTML = ""
        email_insc.nextElementSibling.innerHTML = ""
        pass_insc.nextElementSibling.innerHTML = ""
        login_insc.nextElementSibling.innerHTML = ""

        formRegis.submit()
    }
}


formRegis.addEventListener("submit", function(e){
    e.preventDefault();
    register();
})






})


