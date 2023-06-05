<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="scripts/scriptHome.js"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap" rel="stylesheet"> 
    <title>Home</title>
</head>

<body>
    <header>
        <?php
        if (!isset($_SESSION["user"]['login'])) {
        ?>
            <div id="logRegDisplay" class="logRegDisplay">
                <?php require("header.php") ?>
                <p></p>
            </div>
        <?php
        } else {
        ?>
            <div id="logRegDisplay" class="isLogged">
                <div class="profilAccount ">
                <img src="img/personne.png" class="profilAccount" alt="">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
            </div>
        <?php
        }

        ?>

        <div class="titre">
            <img src="img/banniere2.png" width="100%" alt="">
        </div>
        <?php
        ?>
    </header>
    <div class="titre">
        <p><img src="img/films.png" width="350px" alt=""></p>
    </div>
    <div class="displayFilms" id="displayFilms"></div>

    <div class="titre">
        <p><img src="img/series.png" width="350px" alt=""></p>
    </div>
    <div class="displayTvShows" id="displayTvShows"></div>
</body>

</html>