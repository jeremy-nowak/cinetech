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
    <script src="https://kit.fontawesome.com/9e12c4c238.js" crossorigin="anonymous"></script>
    <title>Home</title>
</head>

<body>
    <header>
    <?php
    require_once "header.php"
    ?>

        <div class="titre">
            <div class="titre1"><img src="img/titre1.png" alt=""></div>
            <div class="titre2"><img src="img/titre2.png" alt=""></div>

        </div>
        <?php
        ?>
    </header>
    <div class="titre">
        <p class="titreTxt">Quelques films:</p>
    </div>
    <div class="displayFilms" id="displayFilms"></div>

    <div class="titre">
    <p class="titreTxt">Quelques séries:</p>
    </div>
    <div class="displayTvShows" id="displayTvShows"></div>
</body>

</html>