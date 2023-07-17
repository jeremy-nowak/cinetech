<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="scriptConnexion.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/9e12c4c238.js" crossorigin="anonymous"></script>

    <title>Page de connexion</title>
</head>    

<body>

<header>

<?php
  require_once "header.php"
  ?>


</header>


<?php
    if (isset($error)) {
        echo "<h2> $error </h2>";
    }
?>
<div class="divForm">
    <form method="post" id="formConnexion">

        <label for="login">login:</label>
        <input name="login" type="login" id="login" placeholder="Login">
        <p></p>

        <label for="pass">Password:</label>
        <input name="pass" type="password" id="pass" placeholder="Password">
        <p></p>

        <button type="submit">Validate</button>
    </form>
    <p></p>
</div>

    <script defer src="scripts/scriptConnexion.js"></script>
</body>
</html>