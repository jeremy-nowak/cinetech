<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="scripts/scriptAuth.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/9e12c4c238.js" crossorigin="anonymous"></script>

    <title>Register</title>
</head>
<body>
    <header>

    <?php
    require_once "header.php"
    ?>

    </header>

<?php if (isset($error)){
        echo "<h2> $error </h2>";
    }
    ?>

    <form method="post" id="formRegis" name="formRegis">

        <label for="login">login:</label>
        <input name="login" id="login" type="text" placeholder="login">
        <p></p>

        <label for="email">Mail:</label>
        <input name="email" id="email" type="email" placeholder="Email">
        <p></p>

        <label for="pass">Password:</label>
        <input name="pass" id="pass" type="password" placeholder="Password">
        <p></p>

        <label for="pass_conf">Password confirmation:</label>
        <input name="pass_conf" id="pass_conf" type="password" placeholder="Password Confirmation" >
        <p></p>

        <button type="submit" id="submit_insc" name="submit_insc" >Validate</button>
        <p></p>
        
    </form>    

</body>
</html>