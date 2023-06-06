<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="scripts/scriptTvShow.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/9e12c4c238.js" crossorigin="anonymous"></script>


    <title>Series</title>
</head>
<body>
    <header>
    <?php
    require_once "header.php"
    ?>
        <div class="banniere2">
            <img src="img/tvShowCateg.png" alt="">
        </div>
        <div id="displayCategories"></div>
    </header>
    <div id="tvShowByCateg" class="tvShowByCateg"></div>
</body>
</html>