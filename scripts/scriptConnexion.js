let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let formConnexion = document.querySelector('#formConnexion')
formConnexion.classList.add('fetched-element');
console.log(formConnexion)

function connexion(){
    let formConnexion = document.querySelector("#formConnexion");
console.log(formConnexion)
    email.nextElementSibling.innerHTML = ""
    pass.nextElementSibling.innerHTML = ""
    if(email.value == ""){
        email.nextElementSibling.innerHTML = "Email non renseigné"
    }
    else if(pass.value == ""){
        pass.nextElementSibling.innerHTML = "Mot de passe non renseigné"
    }
    else{
        fetch("/cinetech/connexion", formConnexion)
    }
}


formConnexion.addEventListener('submit', function(e){
    e.preventDefault();
    // connexion()
    console.log("click");
})