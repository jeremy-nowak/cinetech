<?php

namespace App\Model;

class UserModel extends Model
{
    protected $bdd;
    protected $tablename = 'user';
    private $id;
    private $login;
    private $email;

    public function __construct()
    {
        parent::__construct();
        $this->id;
        $this->login;
        $this->email;


        // get user data
        if (isset($_SESSION['user'])) {
            $this->id = $_SESSION['user']['id'];
            $this->login = $_SESSION['user']['login'];
            $this->email = $_SESSION['user']['email'];
        }
    }

    public function createUser(array $values)
    {

        $request = "INSERT INTO user (login, email, password) VALUES(:login, :email, :password)";
        $insert = $this->bdd->prepare($request);
        $response = $insert->execute($values);
        return $response;
    }

    public function connect($login, $password)
    {
        // Get user data where login = the login entered by the user
        $request = "SELECT * FROM $this->tablename WHERE login = :login";
        $select = $this->bdd->prepare($request);

        $login = trim(htmlspecialchars($login));
        $password = trim(htmlspecialchars($password));

        $select->execute([
            ':login' => $login,
        ]);

        $result = $select->fetch(\PDO::FETCH_ASSOC);
        // check if user exist
        if (!$result) {
            echo "error";
            die();
        }
        //  password verification
        if (password_verify($password, $result['password'])) {
            $_SESSION['user'] = [
                'id' => $result['id_user'],
                'login' => $result['login'],
                'email' => $result['email'],
            ];
            echo "Successfull connection !";
        } else {
            echo "error";
        }
        $this->bdd = null;
    }

    // public function createUser(array $values)
    // {

    //     $request = "INSERT INTO user (email, password) VALUES(:email, :password)";

    //     $insert = $this->pdo->prepare($request);
    //     $response = $insert->execute($values);
    //     return $response;
    // }

    // check if user exist
    public function isUserExist($login)
    {
        $request = "SELECT * FROM $this->tablename WHERE login = :login";
        $select = $this->bdd->prepare($request);
        $select->execute([
            ':login' => $login
        ]);
        $result = $select->fetch(\PDO::FETCH_ASSOC);
        if ($result) {
            echo "indispo";
        } else {
            echo "dispo";
        }
        $this->bdd = null;
    }

    public function isLogged()
    {
        if (isset($_SESSION['user'])) {
            return true;
        } else {
            return false;
        }
    }
    public function logout()
    {
        session_destroy();
        header('Location: index.php');
    }




    // -------------- GETTERS --------
    // get user data
    public function getLogin()
    {
        return $this->login;
    }

    // get user id
    public function getUserId()
    {
        return $this->id;
    }

    // get user email
    public function getEmail()
    {
        return $this->email;
    }

    // -----------------------------------

    public function updateLogin($login, $old, $password)
    {
        $requete = "SELECT password FROM $this->tablename where login = :old";

        $select = $this->bdd->prepare($requete);

        $old = htmlspecialchars($old);
        $login = htmlspecialchars($login);
        $password = htmlspecialchars($password);

        $select->execute(array(':old' => $old));
        $fetch_assoc = $select->fetch(\PDO::FETCH_ASSOC);
        $password_hash = $fetch_assoc['password'];

        if (password_verify($password, $password_hash)) {
            $requete2 = "UPDATE $this->tablename SET login=:login WHERE id_user=:id";
            $update = $this->bdd->prepare($requete2);
            $update->execute(array(
                ':login' => $login,
                ':id' => $this->id,
            ));

            if ($update) {
                $this->login = $login;

                $_SESSION['user']['login'] = $login;
                $error = "ok";
                echo $error;
            } else {
                $error = "error";
                echo $error;
            }
        } else {
            $error = "incorrect";
            echo $error; // wrong password
        }

        $this->bdd = null;
    }

    public function getAll()
    {
        return parent::getAll();
    }

    public function userExist($login) 
    {
        $request = "SELECT * FROM user WHERE login= :login";
        $select = $this->bdd->prepare($request);
        $select->execute([
            ":login" => $login
        ]);
        $result = $select->fetchAll(\PDO::FETCH_ASSOC);
        if ($result) {
            return true;
        } else {
            return false;
        }
    }

    public function findOne($login)
    {

        $request = "SELECT * FROM user WHERE login= :login";
        $select = $this->bdd->prepare($request);
        $select->execute([
            ":login" => $login
        ]);
        $result = $select->fetchAll(\PDO::FETCH_ASSOC);

        return $result;
    }

    public function deleteOne($id, $colname = "id_user")
    {
        echo parent::deleteOne($id, $colname);
    }
}
