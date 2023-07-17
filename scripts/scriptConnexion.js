let login = document.querySelector('#login');
let pass = document.querySelector('#pass');
let formConnexion = document.querySelector('#formConnexion')
formConnexion.classList.add('fetched-element');

function connexion(){
    let formConnexion = document.querySelector("#formConnexion");
    
    login.nextElementSibling.innerHTML = ""
    pass.nextElementSibling.innerHTML = ""
    
    if(login.value == ""){
        login.nextElementSibling.innerHTML = "login non renseigné"
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