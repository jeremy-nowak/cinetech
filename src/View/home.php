<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="scripts/scriptHome.js"></script>
    <script defer src="scripts/scriptConnexion.js"></script>

    <link rel="stylesheet" href="style.css">
    <title>Home</title>
</head>
<body>
    <header>
        <div id="logRegDisplay"> 
            <?php require("header.php") ?>
            <p></p>

        </div>
        <div class="titre">
            <img src="img/banniere2.png" width="100%" alt="">
        </div>
    </header>
    <div class="titre">
    <p><img src="img/films.png"  width="350px" alt=""></p>
    </div>
    <div class="displayFilms" id="displayFilms"></div>

    <div class="titre">
    <p><img src="img/series.png" width="350px" alt=""></p>
    </div>
    <div class="displayTvShows" id="displayTvShows"></div>
</body>
</html>
