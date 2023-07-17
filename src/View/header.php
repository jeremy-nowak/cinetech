

<div class="banniere">
    <div class="connexRegis">

        <div class="home" id="home">
            <a href="/cinetech"><p class="summary">Accueil</p></a>
        </div>

        <div class="series" id="series">
            <a href="/cinetech/tvShows"><p class="summary">Séries</p></a>
        </div>


        <div class="films" id="films">
            <a href="/cinetech/movies"><p class="summary">Films</p></a>
        </div>

        <?php if (!isset($_SESSION["user"]['login'])):?>
        <div class="login" id="login">
            <a href="/cinetech/connexion"><p class="summary">Se connecter</p></a>
        </div>

        <div class="register" id="register">
            <a href="/cinetech/register"><p class="summary">S'enregistrer</p></a>
        </div>
        <?php else :?>

            <div id="logRegDisplay" class="isLogged">
        <div class="profilAccount ">
            <a href="/cinetech/profil"><i class="fa-regular fa-user fa-xl"></i></a>
            <a href="/cinetech/logout"><i class="fa-solid fa-arrow-right-from-bracket fa-xl"></i></a>  
        </div>
    </div>

        <?php endif ?>
    </div>
</div>

