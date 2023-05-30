<?php
namespace App\Controller;

use App\Model\UserModel;

class AuthController
{

    public function register()
    {
        if (!empty($_POST['email']) && !empty($_POST['login']) && !empty($_POST['pass']) === !empty($_POST['pass_conf'])) {
            $login = htmlspecialchars(trim($_POST['login']));
            $email = htmlspecialchars(trim($_POST['email']));
            $pass = htmlspecialchars(trim($_POST['pass']));

            $usermodel = new UserModel();
            if (!$usermodel->userExist($email)) {

                $response = $usermodel->createUser([
                    "login" => $login,
                    "email" => $email,
                    "password" => password_hash($pass, PASSWORD_DEFAULT)
                ]);

                if ($response) {
                    header("location: /cinetech/connexion");
                } else {
                    $error = "erreur lors de l'inscription";
                    require "src/View/register.php";
                };
            } else {
                $error = "Au moins un des champs est vide, ou les mots de passes de correspondent pas";
                require "src/View/register.php";
            }
        }
    }

    public function userConnect()
    {
        var_dump("$_POST");
        die();
        $usermodel = new UserModel();
        if (!empty($_POST['email']) && !empty($_POST['pass'])) {

            $email = htmlspecialchars(trim($_POST['email']));
            $pass = htmlspecialchars(trim($_POST['pass']));
            if ($usermodel->userExist($email)) {

                $userInfo = $usermodel->findOne($email);
                if (password_verify($pass, $userInfo[0]["password"])) {

                    $_SESSION['user'] = [
                        'id' => $userInfo[0]['id_user'],
                        'login' => $userInfo[0]['login'],
                        'email' => $userInfo[0]['email'],
                    ];
                    require "src/View/home.php";

                    
                }
            }
        } else {
            echo "Error";
        }
    }

    public function displayLogForm(){
        require_once "src/View/login.php";

    }

}
