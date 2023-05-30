<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="scriptConnexion.js"></script>
    <title>Page de connexion</title>
</head>    

<body>

<?php
    if (isset($error)) {
        echo "<h2> $error </h2>";
    }
?>
    <form method="post" id="formConnexion">

        <label for="email">Mail:</label>
        <input name="email" type="email" id="email" placeholder="Email">
        <p></p>

        <label for="pass">Password:</label>
        <input name="pass" type="password" id="pass" placeholder="Password">
        <p></p>

        <button type="submit">Validate</button>
    </form>
    <p></p>

    <script defer src="scripts/scriptConnexion.js"></script>
</body>
</html>