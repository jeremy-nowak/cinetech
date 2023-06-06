<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/9e12c4c238.js" crossorigin="anonymous"></script>

  <title>Profil</title>
</head>

<body>
  <header>

  <?php
  require_once "header.php"
  ?>

  </header>

  <div class="profil" id="profil">
    <div class="profile-container">
      <h1>Mon Profil</h1>
      <form method="post" id="formUpdate">
        <div class="profile-info">
          <label>Nom:</label>
          <input type="text" name="nameForm">
        </div>
        <div class="profile-info">
          <label>Email:</label>
          <input type="text" name="emailForm">
        </div>
        <div class="profile-info">
          <label>Vos favoris:</label>
          <img src="" alt="">
        </div>
        <button type="submit"  >Update info</button>
      </form>
    </div>
</body>

</html>