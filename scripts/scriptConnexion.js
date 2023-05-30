let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let formConnexion = document.querySelector('#formConnexion')
formConnexion.classList.add('fetched-element');

function connexion(){
    let formConnexion = document.querySelector("#formConnexion");
    
    email.nextElementSibling.innerHTML = ""
    pass.nextElementSibling.innerHTML = ""
    
    if(email.value == ""){
        email.nextElementSibling.innerHTML = "Email non renseigné"
    }
    else if(pass.value == ""){
        pass.nextElementSibling.innerHTML = "Mot de passe non renseigné"
    }
    else{
        let data = new FormData(formConnexion);

        fetch("/cinetech/connexion",{
            method: "POST",
            body: data,

        })
        .then((response) => response.text())
        .then((response) => {
            if(response === "ok"){
                window.location.href = "/cinetech/"  

            }
        })


    }
}


formConnexion.addEventListener('submit', function(e){
    e.preventDefault();
    connexion()
})