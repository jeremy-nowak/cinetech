<?php
session_start();

use App\Controller\AuthController;
require "vendor/autoload.php";
$router = new AltoRouter();
$router->setBasePath('/cinetech');


$router->map('GET', '/', function () {
    require "src/View/home.php";
}, 'home');

$router->map('GET', '/tvShows', function () {
    require "src/View/tvShow.php";
}, 'tvShow');


$router->map('GET', '/movies', function () {
    require "src/View/movies.php";
}, 'movies');

$router->map('GET', '/tvShow/[i:id]', function ($id) {
    require "src/View/detailTvShow.php";
}, 'detailTvShow');

$router->map('GET', '/movie/[i:id]', function ($id) {
    require "src/View/detailMovie.php";
}, 'detailMovie');


$router->map('GET', '/register', function () {
    require "src/View/register.php";
}, 'registerForm');

$router->map('POST', '/register', function () {

    $authControleur = new AuthController();
    $authControleur->register();
    
}, 'register');

$router->map('GET', '/connexion', function () {
    $authControleur = new AuthController();
    $authControleur-> displayLogForm();
}, 'connexionForm');

$router->map('POST', '/connexion', function () {

    $authControleur = new AuthController();
    $authControleur->userConnect();
    
}, 'connexion');




// match
$match = $router->match();

// call closure or throw 404 status
if (is_array($match) && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    // no route was matched
    header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}

?>