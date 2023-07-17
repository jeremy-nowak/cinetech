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
        
        $usermodel = new UserModel();
        if (!empty($_POST['login']) && !empty($_POST['pass'])) {

            $login = htmlspecialchars(trim($_POST['login']));
            $pass = htmlspecialchars(trim($_POST['pass']));
            if ($usermodel->userExist($login)) {

                $userInfo = $usermodel->findOne($login);
                if (password_verify($pass, $userInfo[0]["password"])) {

                    $_SESSION['user'] = [
                        'id' => $userInfo[0]['id_user'],
                        'login' => $userInfo[0]['login'],
                        'email' => $userInfo[0]['email'],
                    ];
                    echo "ok";
                }
            }
        } else {
            echo "Error";
        }
    }


    public function AddToFavorites(){
        
    }

    public function displayLogForm(){
        require_once "src/View/login.php";
    }

    public function displayRegForm(){
        require_once "src/View/register.php";
    }

    public function logout()
    {
        session_destroy();
        header("Location: /cinetech");
    }
    
    public function profil(){
        require_once "src/View/profil.php";
    }


}
